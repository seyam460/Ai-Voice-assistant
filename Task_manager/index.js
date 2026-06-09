<<<<<<< HEAD
const API_URL = "https://6a1716461b90031f81b20291.mockapi.io/tasks";

const taskLists = document.getElementById("tasks");
const taskForm = document.getElementById("new-task-form");
const taskInputTitle = document.getElementById("task-title");

const fetchTasks = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const tasks = JSON.parse(xhr.response);
            console.log(tasks);

            renderTasks(tasks);
        }
    };
    xhr.send();
};

const renderTasks = (tasks) => {
    tasks.forEach((task) => {
        let li = document.createElement("li");

        li.innerHTML = `<div class='single-task'>
    <p>${task.id}. ${task.name}</p>
    <div>
    <button class='edit-btn' data-id="${task.id}">EDIT</button>
    <button class='delete-btn' data-id="${task.id}">DELETE</button>
    </div>
    </div>`;

        taskLists.appendChild(li);
    });

    let editButtons = document.querySelectorAll(".edit-btn");
    let deleteButtons = document.querySelectorAll(".delete-btn");
    editButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const taskId = e.target.dataset.id;
            window.location.href = `edit.html?task=${taskId}`;
        });
    });

    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const taskId = e.target.dataset.id;
            deleteTask(taskId);
        });
    });
};

const addTasks = (task) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", API_URL, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 201) {
            alert("TASK ADDED SUCCESSFULLY");
            fetchTasks();
        }
    };
    xhr.send(JSON.stringify({ name: task, completed: false }));
};

const deleteTask = (taskID) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `${API_URL}/${taskID}`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert(`Task: ${taskID} deleted successfully!`);
        }
    };
    xhr.send();
};

fetchTasks();

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = taskInputTitle.value;
    if (taskTitle) {
        addTasks(taskTitle);
        taskInputTitle.value = "";
    } else {
        alert("NO TASK FOUND");
    }
=======
const API_URL = "https://6a1716461b90031f81b20291.mockapi.io/tasks";

const taskLists = document.getElementById("tasks");
const taskForm = document.getElementById("new-task-form");
const taskInputTitle = document.getElementById("task-title");

const fetchTasks = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const tasks = JSON.parse(xhr.response);
            console.log(tasks);

            renderTasks(tasks);
        }
    };
    xhr.send();
};

const renderTasks = (tasks) => {
    tasks.forEach((task) => {
        let li = document.createElement("li");

        li.innerHTML = `<div class='single-task'>
    <p>${task.id}. ${task.name}</p>
    <div>
    <button class='edit-btn' data-id="${task.id}">EDIT</button>
    <button class='delete-btn' data-id="${task.id}">DELETE</button>
    </div>
    </div>`;

        taskLists.appendChild(li);
    });

    let editButtons = document.querySelectorAll(".edit-btn");
    let deleteButtons = document.querySelectorAll(".delete-btn");
    editButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const taskId = e.target.dataset.id;
            window.location.href = `edit.html?task=${taskId}`;
        });
    });

    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const taskId = e.target.dataset.id;
            deleteTask(taskId);
        });
    });
};

const addTasks = (task) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", API_URL, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 201) {
            alert("TASK ADDED SUCCESSFULLY");
            fetchTasks();
        }
    };
    xhr.send(JSON.stringify({ name: task, completed: false }));
};

const deleteTask = (taskID) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `${API_URL}/${taskID}`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert(`Task: ${taskID} deleted successfully!`);
        }
    };
    xhr.send();
};

fetchTasks();

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = taskInputTitle.value;
    if (taskTitle) {
        addTasks(taskTitle);
        taskInputTitle.value = "";
    } else {
        alert("NO TASK FOUND");
    }
>>>>>>> edc7491935209470b0b2cff161aa1f6a7808e269
});