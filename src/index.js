let title = document.querySelector("#title")
let description = document.querySelector("#description");
let dueDate = document.querySelector("#dueDate");
let priority = document.querySelector("#priority");
let range = document.querySelector("#range");
window.removeToDo= removeToDo;
window.edit= edit;
const form = document.querySelector("#toDoForm");
let content = document.querySelector("#content");
priority.textContent = range.value;
var myToDo = [];
localStorageRetrieve();
function localStorageSave(){

  localStorage.setItem('myToDo', JSON.stringify(myToDo));
}

function localStorageRetrieve(){

  let storedToDos = JSON.parse(localStorage.getItem('myToDo'));
  if (storedToDos !== null) {
  myToDo = storedToDos;
  render();  }
  }

function removeToDo(index){
  myToDo.splice(index,1)
  render();
}
function edit(index){
  const toDo = myToDo[index];
  document.querySelector("#title").value = toDo.title;
  document.querySelector("#description").value = toDo.description;
  document.querySelector("#dueDate").value = toDo.dueDate;
  document.querySelector("#priority").value = toDo.priority;
  myToDo.splice(index,1)
  render();
}

function toDo(title,description,dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

function render(){
  let libraryEl = document.querySelector("#content")
  libraryEl.innerHTML = "";
  for(let i=0;i< myToDo.length;i++){

    let toDo = myToDo[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = 
    `
    <div class="book-card">
    <h3 class="title">Title: ${toDo.title}</h3>
    <h3 class="description">Description: ${toDo.description}</h3>
    <h3 class="dueDate">DueDate ${toDo.dueDate}</h3>
    <h3 class="priority">Priority ${toDo.priority}</h3>
    <button class="edit-btn" onclick="edit(${i})">Edit</button>
    <button class="remove-btn" onclick="removeToDo(${i})">Remove</button>
    <br><br>
    </div>
`
    libraryEl.appendChild(bookEl);
    localStorageSave();
  }
}

function addToDo() {

  let title = document.querySelector("#title").value
  let description = document.querySelector("#description").value
  let dueDate = document.querySelector("#dueDate").value
  let priority = document.querySelector("#priority").value
let newToDo = new toDo(title, description, dueDate, priority);
myToDo.push(newToDo);
form.reset();
render();

}


range.addEventListener("input", (event) => {
  priority.textContent = event.target.value;


});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addToDo()
  
});
