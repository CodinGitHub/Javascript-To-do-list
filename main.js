//Contador de tareas
let taskCounter = 0;

addBtn.addEventListener('click', agregar);

function agregar(){
    
        taskCounter++;
        //Obtengo el texto del input
        const input = document.querySelector('input[type="text"]');
        let newValue = input.value;
    
        const newTask = ` 
        <div class="task-container" id="${taskCounter}">
            <label>
                <input type="checkbox" onclick="updateStats()"> 
                ${newValue}
            </label>
            <img src="./images/delete.png" class="closeBtn" id="${taskCounter}">
        </div>`
          
        list.innerHTML += newTask;
        updateStats();
        input.value = '';
   
}

list.addEventListener('click',(event)=>{
    deleteTask(event.target.id);
});

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