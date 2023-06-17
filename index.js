function nuevaTarea(){

let fila = document.querySelector(".tarea-fila");
let tareas = document.querySelector("#tareas");
let tarea = tareas.appendChild(fila.cloneNode(true));

let value = document.querySelector("#tarea-nombre").value;
 tarea.innerText = value





}