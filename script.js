let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const btn = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
let list = document.getElementById("taskList")
let compl= document.querySelector(".complete-btn")
let del= document.querySelector(".delete-btn")
let todo=document.querySelector(".todo-container")

btn.addEventListener("click", () => {
    const task = input.value.trim();

    if (!task) return;

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    tasks.forEach(task => {
        let l = document.createElement("li");
        let div = document.createElement("div");
        taskList.display="initial";
        
    });
  

    

    input.value = "";
});