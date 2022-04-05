//Contador de tareas
let taskCounter = 0;

userInput.addEventListener('submit', agregar);

function agregar(){
    
        taskCounter++;
        //Obtengo el texto del input
        const input = document.querySelector('input[type="text"]');
        let newValue = input.value;
    
        const newTask = ` 
        <div class="task-container" id="${taskCounter}">
            <label>
                <input type="checkbox"> 
                ${newValue}
            </label>
            <img src="./images/delete.png" class="closeBtn">
        </div>`
          
        list.innerHTML += newTask;
        input.value = ''; 
        updateStats();
}

list.addEventListener('click',(event)=>{
    if (event.srcElement.nodeName == 'INPUT'){
        updateStats();
    }else if(event.srcElement.nodeName == 'IMG'){
        deleteTask(event.target.offsetParent.id);
    }
});

function deleteTask(id) {
    let taskToDelete = document.getElementById(`${id}`);
    list.removeChild(taskToDelete);
    updateStats();
}

let updateStats = () => {
    let checboxsSelected = document.querySelectorAll('input[type="checkbox"]:checked');
    let elements = list.querySelectorAll('div');
    stats.innerHTML = `Tareas pendientes: ${elements.length} Completadas: ${checboxsSelected.length}`
}