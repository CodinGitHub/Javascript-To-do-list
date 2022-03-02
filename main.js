let agregar = () => {
    // seleccionar la lista padre
    const list = document.querySelector('.list-container');

    //crear un div
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'task-container');
    let elements = list.querySelectorAll('div')
    newDiv.setAttribute('id', elements.length + 1);

    //crear un label
    const newLabel = document.createElement('label');

    //crear un checkbox
    const newCheckBox = document.createElement('input') 
    newCheckBox.setAttribute('type', 'checkbox');

    //crear una img
    var imgClose = document.createElement('img');
    imgClose.setAttribute('src', './images/delete.png');
    imgClose.setAttribute('onclick', `deleteTask('${elements.length+1}')`)
    
    //Obtengo el texto del input
    const input = document.querySelector('input[type="text"]');
    let newTask = input.value;

    //Agrego el chekbox a la lista
    newLabel.append(newCheckBox,  " " + newTask);

    //Agrego label  y img al Div
    newDiv.append(newLabel, imgClose)

    //agrego el div a la lista
    list.append(newDiv);
}
function deleteTask(id) {
    console.log(id);
}