let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const btn = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
let list = document.getElementById("taskList")
let l;
let div;
let compl;
let del;

let todo=document.querySelector(".todo-container")

btn.addEventListener("click", () => {
    const task = input.value.trim();

    if (!task) return;

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    tasks.forEach(task => {
         l = document.createElement("li");
         div = document.createElement("div");
         compl =  document.createElement("button");
         del =  document.createElement("button");
        compl.classList.add("complete-btn");
        del.classList.add("delete-btn");
        compl.style.visibility="visible";
        compl.innerText="✔";
        del.style.visibility="visible";
        del.innerText="✖";
       div.classList.add("actions");
       div.appendChild(compl);
       div.appendChild(del);
        l.textContent=(task);
        l.appendChild(div);
        
        l.classList.add("task")
        list.appendChild(l);
        list.style.display="initial";
        todo.appendChild(list);
        
    });
  

    

    input.value = "";
});

// localStorage.removeItem("tasks");