
let lista=[]

function crearTarea(){
    let fila = document.querySelector("#componentes .tarea-fila");
    let tareas = document.querySelector("#tareas");
    let tarea = tareas.appendChild(fila.cloneNode(true))
    let indiceTarea=lista.push(tarea) -1
    idTarea = `tarea-${indiceTarea}`
    tarea.id = idTarea

    let botonEliminar = document.querySelector(`#${idTarea} button.tarea-eliminar`)
    botonEliminar.setAttribute("fila",indiceTarea)
    
    nombre= document.querySelector("#tarea-nombre")
    nombre = nombre.value
    let elementoNombre = document.querySelector(`#${idTarea} span`)
    elementoNombre.innerText=nombre
}