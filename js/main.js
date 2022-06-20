let toDoContainer = document.getElementById('toDoContainer');
let addToDoButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');

// const validateInput = () => inputField.value.trim().length > 0;

// const handleAddTask = () => {
//     const inputIsValid = validateInput();

//     if (!inputField) {
//         return inputField.classList.add("error");
//     }
// }

// addToDoButton.addEventListener("click", () => handleAddTask());

addToDoButton.addEventListener('click', function() {

var taskItemContainer = document.createElement("div");
taskItemContainer.classList.add("checkboxItem");
taskItemContainer.type = "checkbox";

var paragraph = document.createElement('p');
paragraph.innerText = inputField.value;
inputField.value = ""; //"limpa" o input após add tarefa

var inputBtn = document.createElement("input");
inputBtn.classList.add("inputBtn");
inputBtn.type = "checkbox";

toDoContainer.appendChild(taskItemContainer);
taskItemContainer.appendChild(inputBtn);
taskItemContainer.appendChild(paragraph);

console.log(taskItemContainer);
console.log(paragraph);
console.log(toDoContainer);


// paragraph.addEventListener('click', function() {
//     paragraph.style.textDecoration = "line-through";
// })

inputBtn.addEventListener('click', function() {

    if (inputBtn.checked){
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "silver";
    }
    else {
        paragraph.style.textDecoration = "";
        paragraph.style.color = "";
    }
})



paragraph.addEventListener('dblclick', function() {
    toDoContainer.removeChild(taskItemContainer);
    // toDoContainer.removeChild(paragraph); --apagar
    
})


})