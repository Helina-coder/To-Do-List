document.getElementById("addBtn").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let newTask = document.createElement("li");

        // Create task text
        let taskText = document.createElement("span");
        taskText.innerText = taskInput.value;

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(newTask);
        });

        // Append text and button to the task
        newTask.appendChild(taskText);
        newTask.appendChild(deleteBtn);

        // Add the new task to the list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = "";
    }
});