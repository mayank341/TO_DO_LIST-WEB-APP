
# My To-Do List

A simple, clean, and interactive to-do list web application that helps you manage your tasks efficiently.

🌐 **Live Demo:**https://youttodolist.netlify.app

## Features

- ✅ **Add Tasks** - Easily add new tasks to your to-do list
- 📋 **View All Tasks** - Display all tasks in one place
- ⚡ **Filter Tasks** - View tasks by status:
  - All tasks
  - Active tasks (incomplete)
  - Completed tasks
- 🗑️ **Delete Tasks** - Remove individual tasks from your list
- 🧹 **Clear Completed** - Remove all completed tasks at once
- 💾 **Local Storage** - Your tasks are saved locally in your browser
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Storage:** Browser Local Storage
- **Deployment:** Netlify

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning the repository)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/youttodolist.git
cd youttodolist
```

2. Open the project in your browser:
```bash
# Simply open index.html in your browser
open index.html
```

Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## Usage

1. **Add a Task:** Type your task in the input field and click "Add" or press Enter
2. **View Tasks:** Use the filter buttons to see:
   - **All:** Every task in your list
   - **Active:** Only incomplete tasks
   - **Completed:** Only finished tasks
3. **Complete a Task:** Click the checkbox next to a task to mark it as completed
4. **Delete a Task:** Click the delete button (trash icon) next to a task
5. **Clear Completed:** Click "Clear completed" to remove all finished tasks at once

## Project Structure

```
youttodolist/
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Features in Detail

### Task Management
- Add tasks with a simple input field
- Each task shows a checkbox for marking completion
- Delete individual tasks instantly
- Clear all completed tasks with one click

### Filtering System
- **All:** Shows every task in your list
- **Active:** Displays only incomplete tasks
- **Completed:** Shows only finished tasks
- Task counter displays the number of active tasks

### Data Persistence
- Tasks are automatically saved to browser local storage
- Your to-do list persists between browser sessions
- No account or login required

## Browser Compatibility

- Chrome/Chromium (v90+)
- Firefox (v88+)
- Safari (v14+)
- Edge (v90+)

## Future Enhancements

- [ ] Task priority levels
- [ ] Due dates and reminders
- [ ] Categories/Tags
- [ ] Dark mode theme
- [ ] Cloud sync across devices
- [ ] Export/Import tasks
- [ ] Recurring tasks
- [ ] Collaborative lists

## Contributing

Contributions are welcome! Here's how to help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Bugs & Issues

Found a bug? Please create an issue in the [Issues](https://github.com/yourusername/youttodolist/issues) section with:
- Clear description of the problem
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Your Name** - [GitHub](https://github.com/mayank341) 

## Acknowledgments

- Inspired by popular to-do list applications
- Thanks to Netlify for free hosting
- Icons and design inspiration from modern web applications

## Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting features
- 🔗 Sharing with others

---

**Happy task managing!** 🚀
