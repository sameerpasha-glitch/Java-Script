/** @format */
const input = document.getElementById("inpo");
const button = document.getElementById("but");
const taskList = document.getElementById("taskList");

button.addEventListener("click", () => {
  if (value) {
    const li = document.createElement("li");
    li.textContent = value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.fontSize = "18px";
    deleteButton.style.marginLeft = "10em";
    deleteButton.style.color = "red";
    deleteButton.style.borderRadius = "5px";
    deleteButton.style.border = "none";
    deleteButton.style.cursor = "pointer";

    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(deleteButton);

    li.style.backgroundColor = "orange";
    li.style.color = "white";
    li.style.padding = "10px";
    li.style.margin = "5px 0";
    li.style.borderRadius = "8px";

    taskList.appendChild(li);

    input.value = "";
  }
});
