// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to create a new task element
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Attach remove functionality
        removeBtn.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(removeBtn);

        return listItem;
    }

    // Add task when button is clicked
    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    // Optional: Add task on Enter key press
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
