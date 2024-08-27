let content = document.querySelector("#content")
content.innerHTML= "<div>Welcome to Wayne's Home Diner</div>";




const value = document.querySelector("#value");
const input = document.querySelector("#priority");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

function newTODO(){

}