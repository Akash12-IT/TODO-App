const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="completeButton">Complete</button>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';

        const completeButton = taskItem.querySelector('.completeButton');
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        const deleteButton = taskItem.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
}
