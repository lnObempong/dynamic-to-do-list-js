// Load tasks from Local Storage when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

// Function to load tasks from Local Storage and populate the list
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks.forEach(taskText => addTask(taskText, false)); // Don't re-save while loading
}

// Add task to the DOM and optionally save to Local Storage
function addTask(taskText = null, save = true) {
  const input = document.getElementById('taskInput');
  const task = taskText || input.value.trim();

  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.onclick = () => removeTask(task, li);

  li.appendChild(removeBtn);
  document.getElementById('taskList').appendChild(li);

  if (save) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  if (!taskText) input.value = '';
}

// Remove task from DOM and update Local Storage
function removeTask(taskText, liElement) {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const updatedTasks = tasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));

  liElement.remove();
}
