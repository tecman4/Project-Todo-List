let content = document.querySelector("#content")
let value = document.querySelector("#value");
let input = document.querySelector("#priority");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;


});

function newTODO(){

  content.innerHTML= title.value
  return;
  }