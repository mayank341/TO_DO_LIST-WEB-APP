const STORAGE_KEY = "todolist-items-v1";

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function createTodo(text) {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

const state = {
  todos: loadTodos(),
  filter: "all",
};

const elements = {
  form: document.getElementById("todo-form"),
  input: document.getElementById("todo-input"),
  list: document.getElementById("todo-list"),
  count: document.getElementById("todo-count"),
  clearCompleted: document.getElementById("clear-completed"),
  filters: document.querySelectorAll(".filter-btn"),
};

function renderTodos() {
  elements.list.innerHTML = "";

  const visibleTodos = state.todos.filter((todo) => {
    if (state.filter === "active") return !todo.completed;
    if (state.filter === "completed") return todo.completed;
    return true;
  });

  for (const todo of visibleTodos) {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (todo.completed) li.classList.add("completed");
    li.dataset.id = todo.id;

    const toggle = document.createElement("button");
    toggle.className = "todo-toggle";
    toggle.setAttribute("aria-label", "Toggle complete");
    if (todo.completed) toggle.classList.add("checked");
    toggle.innerHTML = todo.completed
      ? '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 13.1 4.4 10l-1.1 1.1L7.5 15.3 17 5.8 15.9 4.7z"/></svg>'
      : "";

    const textWrapper = document.createElement("div");
    textWrapper.className = "todo-text-wrapper";

    const textSpan = document.createElement("span");
    textSpan.className = "todo-text";
    textSpan.textContent = todo.text;

    const meta = document.createElement("span");
    meta.className = "todo-meta";
    const date = new Date(todo.createdAt);
    meta.textContent = `Added ${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;

    textWrapper.appendChild(textSpan);
    textWrapper.appendChild(meta);

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "icon-btn";
    editBtn.setAttribute("aria-label", "Edit task");
    editBtn.innerHTML =
      '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M4 13.5V16h2.5L14 8.5 11.5 6 4 13.5zm12.8-7.1a.8.8 0 0 0 0-1.1l-1.7-1.7a.8.8 0 0 0-1.1 0l-1.1 1.1L15.7 7l1.1-1.1z"/></svg>';

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "icon-btn danger";
    deleteBtn.setAttribute("aria-label", "Delete task");
    deleteBtn.innerHTML =
      '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M7 15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7H7v8zm7-10h-2.5l-.7-.7A1 1 0 0 0 10.3 4H7.5A.5.5 0 0 0 7 4.5V5H5v1h10V5z"/></svg>';

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(toggle);
    li.appendChild(textWrapper);
    li.appendChild(actions);

    elements.list.appendChild(li);
  }

  const activeCount = state.todos.filter((t) => !t.completed).length;
  elements.count.textContent =
    activeCount === 1 ? "1 task remaining" : `${activeCount} tasks remaining`;
}

function setFilter(filter) {
  state.filter = filter;
  elements.filters.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  renderTodos();
}

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = elements.input.value.trim();
  if (!text) return;

  state.todos.unshift(createTodo(text));
  elements.input.value = "";
  saveTodos(state.todos);
  renderTodos();
});

elements.list.addEventListener("click", (e) => {
  const li = e.target.closest(".todo-item");
  if (!li) return;
  const id = li.dataset.id;
  const todo = state.todos.find((t) => t.id === id);
  if (!todo) return;

  const toggle = e.target.closest(".todo-toggle");
  if (toggle) {
    todo.completed = !todo.completed;
    saveTodos(state.todos);
    renderTodos();
    return;
  }

  const deleteBtn = e.target.closest(".icon-btn.danger");
  if (deleteBtn) {
    state.todos = state.todos.filter((t) => t.id !== id);
    saveTodos(state.todos);
    renderTodos();
    return;
  }

  const editBtn = e.target.closest(".icon-btn:not(.danger)");
  if (editBtn) {
    startEditing(li, todo);
  }
});

function startEditing(li, todo) {
  const textWrapper = li.querySelector(".todo-text-wrapper");
  const currentText = todo.text;
  textWrapper.innerHTML = "";

  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.className = "todo-edit-input";

  textWrapper.appendChild(input);
  input.focus();
  input.select();

  const finish = (save) => {
    const newValue = input.value.trim();
    if (save && newValue) {
      todo.text = newValue;
      saveTodos(state.todos);
    }
    renderTodos();
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      finish(true);
    } else if (e.key === "Escape") {
      e.preventDefault();
      finish(false);
    }
  });

  input.addEventListener("blur", () => finish(true));
}

elements.filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    setFilter(btn.dataset.filter);
  });
});

elements.clearCompleted.addEventListener("click", () => {
  const hasCompleted = state.todos.some((t) => t.completed);
  if (!hasCompleted) return;

  state.todos = state.todos.filter((t) => !t.completed);
  saveTodos(state.todos);
  renderTodos();
});

renderTodos();

