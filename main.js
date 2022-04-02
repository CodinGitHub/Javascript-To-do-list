// Nodos Padre
var list = document.querySelector('.list-container');
var stats = document.querySelector('.stats');

//Contador de tareas
let taskCounter = 0;

var addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', agregar);

function agregar(){
 
        console.log('Boton presionado');
    
        taskCounter++;
        console.log('task counter' + taskCounter)
        //Obtengo el texto del input
        const input = document.querySelector('input[type="text"]');
        let newValue = input.value;
    
        const newTask = ` 
        <div class="task-container" id="${taskCounter}">
            <label>
                <input type="checkbox" onclick="updateStats()"> 
                ${newValue}
            </label>
            <img src="./images/delete.png" onclick="deleteTask('${taskCounter}')" class="closeBoton">
        </div>`
    
        list.innerHTML += newTask;
        updateStats();
        input.value = '';
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
        
    }
});