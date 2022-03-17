// Nodos Padre
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
    newCheckBox.setAttribute('onclick', 'updateStats()');

    //crear una img
    var iconClose = document.createElement('img');
    iconClose.setAttribute('src', './images/delete.png');
    iconClose.setAttribute('onclick', `deleteTask('${taskCounter}')`);
    iconClose.setAttribute('class', 'closeBoton')
    
    //Obtengo el texto del input
    const input = document.querySelector('input[type="text"]');
    let newTask = input.value;

    //Agrego el chekbox a la lista
    newLabel.append(newCheckBox,  " " + newTask);

    //Agrego label  y img al Div
    newDiv.append(newLabel, iconClose)

    //agrego el div a la lista
    list.append(newDiv);

    updateStats();

}

function deleteTask(id) {
    //Remover Tarea
    let taskToDelete = document.getElementById(`${id}`);
    list.removeChild(taskToDelete);
    
    updateStats();
}

let updateStats = () => {
    //Actualizar estadisticas
    let checboxsSelected = document.querySelectorAll('input[type="checkbox"]:checked');
    let elements = list.querySelectorAll('div');
    stats.innerHTML = `Tareas pendientes: ${elements.length} Completadas: ${checboxsSelected.length}`
}

//Espero un enter
const input = document.querySelector('input[type="text"]');
input.addEventListener('keypress', (event)=>{
    if(event.keyCode === 13){
        agregar();
        input.value = '';
    }
});