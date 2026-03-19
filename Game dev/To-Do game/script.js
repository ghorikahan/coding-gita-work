// DOM elements

var todoList = [];
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var deleteAllbutton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deleteSbutton = document.getElementById("delete-selected");


// event listerns for add and delete

function updateList() {
    comdoList = todoList.filter((data) => {
        if (data.complete == true) return data;
    });
    remList = todoList.filter((data) => {
        if (data.complete == false) return data;
    });
}

function appendTask(todoList) {
    allTodos.innerHTML = "" // empty.... -> task

    todoList.forEach((Element) => {
        var x = `<li id=${Element.id} class="todo-item">
    <p id="task"> ${Element.complete ? `<strike>${Element.content}</strike>` : Element.content}  </p>
    <div class="todo-actions">
    <button class="complete btn btn-success">
    <i class="ci bx bx-check bx-sm"></i>
    </button>
    
    <button class="delete btn btn-error">
    <i class="ci bx bx-check bx-sm"></i>
    </button>`
    })
}
function add() {
    //take the content from the input box..
    var text = todoInput.value;
    if (text == '') {
        alert("task not added");
        return;
    }
    else {
        console.log(text);
    }
    console.log(text);

    todoList.push({
        content: text,
        id: Date.now().toString(),
        complete: false
    });

    todoList.forEach(value => {
        console.log(value);
    });
    todoInput.value = "";
    updateList();
}

addButton.addEventListener('click', addTask);

todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

function deleteAll() {
    todoList = [];
    updateList();
    appendTask(todoList);
}
addButton.addEventListener("click", add);
deleteAllbutton.addEventListener("click", deleteAll);


function deleteS(){
    todoList = todoList.filter((data)=>{
        if(data.complete === 'false'){
            return data;
        }
    });

    updateList();
    appendTask(todoList);
}

deleteSbutton.addEventListener('click',deleteS);

function deleteSpecific(event){
    var id = event.target.parentElement.parentElement.getAttribute('id');
    console.log(id);
    todoList = todoList.filter((data)=>{
        return data.id != id;
    });
    updateList();
    appendTask(todoList);
}

function deleteTask(event){

}


document.addEventListener('click',(event)=>{
    if(event.target.classList.contains('delete')  || event.target.classList.contains('ci')){
        deleteTask(event);
    }
    if(event.target.classList.contains('complete') || event.target.classList.contains('ci')){
        completeTask(event);
    }
    if(event.target.classList.contains('all')){
        updateList();
        appendTask(todoList);
    }
    if(event.target.classList.contains('rem')){
        updateList();
        appendTask(remList);
    }
    if(event.target.classList.contains('com')){
        updateList();
        appendTask(comdoList);
    }
});

deleteSbutton.addEventListener("click", deleteS);