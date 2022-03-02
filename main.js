// seleccionar la lista padre
var list = document.querySelector('.list-container');
var stats = document.querySelector('.stats');


//Contador de tareas
let taskCounter = 0;

let agregar = () => {

    taskCounter++;

    //crear un div
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'task-container');
    
    newDiv.setAttribute('id', taskCounter);

    //crear un label
    const newLabel = document.createElement('label');

    //crear un checkbox
    const newCheckBox = document.createElement('input');
    newCheckBox.setAttribute('type', 'checkbox');
    newCheckBox.setAttribute('onclick', 'selectedCheckBox()');

    //crear una img
    var imgClose = document.createElement('img');
    imgClose.setAttribute('src', './images/delete.png');
    imgClose.setAttribute('onclick', `deleteTask('${taskCounter}')`)
    
    //Obtengo el texto del input
    const input = document.querySelector('input[type="text"]');
    let newTask = input.value;

    //Agrego el chekbox a la lista
    newLabel.append(newCheckBox,  " " + newTask);

    //Agrego label  y img al Div
    newDiv.append(newLabel, imgClose)

    //agrego el div a la lista
    list.append(newDiv);

    //Actualizar estadisticas
    let checboxsSelected = document.querySelectorAll('input[type="checkbox"]:checked');
    let elements = list.querySelectorAll('div');
    stats.innerHTML = `Tareas pendientes: ${elements.length} Completadas: ${checboxsSelected.length}`
}
function deleteTask(id) {
    //Remover Tarea
    let taskToDelete = document.getElementById(`${id}`);
    list.removeChild(taskToDelete);
    
    //Actualizar estadisticas
    let checboxsSelected = document.querySelectorAll('input[type="checkbox"]:checked');
    let elements = list.querySelectorAll('div');
    stats.innerHTML = `Tareas pendientes: ${elements.length} Completadas: ${checboxsSelected.length}`
}

let selectedCheckBox = () => {
    
    
    //Actualizar estadisticas
    let checboxsSelected = document.querySelectorAll('input[type="checkbox"]:checked');
    let elements = list.querySelectorAll('div');
    stats.innerHTML = `Tareas pendientes: ${elements.length} Completadas: ${checboxsSelected.length}`
}