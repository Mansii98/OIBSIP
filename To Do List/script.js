// Select elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Add task function
function addTask() {
  const taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteTask);

  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

// Delete task function
function deleteTask() {
  const taskItem = this.parentNode;
  taskList.removeChild(taskItem);
}

// Event listeners
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
