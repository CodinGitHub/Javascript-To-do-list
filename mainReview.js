let IdCounter = 0;

userInput.addEventListener('submit', ()=>{
    IdCounter++;
    // Recoger el texto
    const input = document.querySelector('input[type="text"]');
    let newValue = input.value;

    //Agregar Tarea
    const newTask = `<h2>Nueva Tarea</h2>`
    list.innerHTML += newTask;
});