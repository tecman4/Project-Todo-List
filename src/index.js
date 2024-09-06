let title = document.querySelector("#title")
let description = document.querySelector("#description");
let dueDate = document.querySelector("#dueDate");
let priority = document.querySelector("#priority");
let range = document.querySelector("#range");
const form = document.querySelector("#toDoForm");
priority.textContent = range.value;

range.addEventListener("input", (event) => {
  priority.textContent = event.target.value;


});
form.addEventListener("submit", (event) => {
  console.log(title.value, " ", description.value, " ",dueDate.value, " ",priority.value );
});
