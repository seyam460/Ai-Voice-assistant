const taskID = new URLSearchParams(window.location.search).get("task");
const taskInputTitle = document.getElementById("task-title");
const taskForm = document.getElementById("edit-task-form");
const backButton = document.getElementById("go-back-btn");

const API_URL = "https://67c838720acf98d070857695.mockapi.io/api/v1/tasks";

fetch(`${API_URL}/${taskID}`)
    .then((res) => res.json())
    .then((task) => {
        taskInputTitle.value = task.title;
    })
    .catch(() => alert("SOMETHING WENT WRONG TO GET TASK"));

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const updatedTaskTitle = taskInputTitle.value;
    if (updatedTaskTitle) {
        fetch(`${API_URL}/${taskID}`, {
            method: "PUT",
            body: JSON.stringify({ title: updatedTaskTitle, completed: false }),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then(() => {
                alert("TASK UPDATED SUCCESSFULLY");
                window.location.href = "index.html";
            })
            .catch(() => alert("SOMETHING WENT WRONG TO UPDATE TASK"));
    } else {
        alert("NO TASK FOUND");
    }
});

backButton.addEventListener("click", () => {
    window.history.back();
});