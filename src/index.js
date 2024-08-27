alert("Hello");
console.log("Hello");
let content = document.querySelector("#content")
content.innerHTML= "<div>Welcome to Wayne's Home Diner</div>";

const home = document.getElementById("home");
home.addEventListener("click", function() {
    content.innerHTML= "<div>Welcome to Wayne's Home Diner welcome</div>";
    })

menu.addEventListener("click", function() {
    content.innerHTML= "<div>Chicken Parm</div>";
    })    

about.addEventListener("click", function() {
    content.innerHTML= "<div>Wayne Bonner</div>";
    })