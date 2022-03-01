let agregar = () => {
    // seleccionar la lista padre
    const list = document.querySelector('.list-container');

    //crear un label
    const newLabel = document.createElement('label');

    //crear un checkbox
    const newCheckBox = document.createElement('input') 
    newCheckBox.setAttribute('type', 'checkbox');

    //crear un boton de cerrar
    const closeButton = document.createElement('button');
    closeButton.value = 'cerrar'
    console.log(closeButton)
    
    //Obtengo el texto del input
    const input = document.querySelector('input[type="text"]');
    let newTask = input.value;

    //Agrego el chekbox a la lista
    newLabel.append(newCheckBox,  " " + newTask, closeButton);

    //Agrego label a la lista
    list.append(newLabel)
}
// function delete() {
//     alert('tarea borrada');
// }