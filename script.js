document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        addTask(taskText);
        newTaskInput.value = '';
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.className = 'todo-app__list-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'todo-app__delete-button';

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
    }
});