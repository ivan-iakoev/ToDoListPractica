

function nuevaTarea(){

let fila = document.querySelector(".tarea-fila");
let tareas = document.querySelector("#tareas");
let tarea = tareas.appendChild(fila.cloneNode(true));


nombre= document.querySelector("#tarea-nombre")
    nombre = nombre.value
    let elementoNombre = document.querySelector(`#${idTarea} span`)
    elementoNombre.innerText=nombre



}