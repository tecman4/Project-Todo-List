(()=>{var __webpack_modules__={44:()=>{eval('let title = document.querySelector("#title")\nlet description = document.querySelector("#description");\nlet dueDate = document.querySelector("#dueDate");\nlet priority = document.querySelector("#priority");\nlet range = document.querySelector("#range");\nwindow.removeToDo= removeToDo;\nwindow.edit= edit;\nlocalStorageRetrieve();\nconst form = document.querySelector("#toDoForm");\nlet content = document.querySelector("#content");\npriority.textContent = range.value;\nconst myToDo = [];\nlocalStorageRetrieve();\n\nfunction localStorageSave(){\n  localStorage.setItem(\'myToDo\', JSON.stringify(myToDo));\n}\nfunction localStorageRetrieve(){\n  if (localStorage.getItem(\'myToDo\') !== null) {\n  let myToDo = JSON.parse(localStorage.getItem(\'myToDo\'));\n  render();\n  }\n}\n\nfunction removeToDo(index){\n  myToDo.splice(index,1)\n  render();\n}\nfunction edit(index){\n  const toDo = myToDo[index];\n  document.querySelector("#title").value = toDo.title;\n  document.querySelector("#description").value = toDo.description;\n  document.querySelector("#dueDate").value = toDo.dueDate;\n  document.querySelector("#priority").value = toDo.priority;\n  myToDo.splice(index,1)\n  render();\n}\n\nfunction toDo(title,description,dueDate, priority) {\n  this.title = title;\n  this.description = description;\n  this.dueDate = dueDate;\n  this.priority = priority;\n}\n\nfunction render(){\n  let libraryEl = document.querySelector("#content")\n  libraryEl.innerHTML = "";\n  for(let i=0;i< myToDo.length;i++){\n\n    let toDo = myToDo[i];\n    let bookEl = document.createElement("div");\n    bookEl.innerHTML = \n    `\n    <div class="book-card">\n    <h3 class="title">Title: ${toDo.title}</h3>\n    <h3 class="description">Description: ${toDo.description}</h3>\n    <h3 class="dueDate">DueDate ${toDo.dueDate}</h3>\n    <h3 class="priority">Priority ${toDo.priority}</h3>\n    <button class="edit-btn" onclick="edit(${i})">Edit</button>\n    <button class="remove-btn" onclick="removeToDo(${i})">Remove</button>\n    <br><br>\n    </div>\n`\n    libraryEl.appendChild(bookEl);\n    localStorageSave();\n  }\n}\n\nfunction addToDo() {\n\n  let title = document.querySelector("#title").value\n  let description = document.querySelector("#description").value\n  let dueDate = document.querySelector("#dueDate").value\n  let priority = document.querySelector("#priority").value\nlet newToDo = new toDo(title, description, dueDate, priority);\nmyToDo.push(newToDo);\nform.reset();\nrender();\n\n}\n\n\nrange.addEventListener("input", (event) => {\n  priority.textContent = event.target.value;\n\n\n});\nform.addEventListener("submit", (event) => {\n  event.preventDefault();\n  addToDo()\n  \n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDLDJDQUEyQyxpQkFBaUI7QUFDNUQsa0NBQWtDLGFBQWE7QUFDL0Msb0NBQW9DLGNBQWM7QUFDbEQsNkNBQTZDLEVBQUU7QUFDL0MscURBQXFELEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKVxubGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbmxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpO1xubGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcbmxldCByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFuZ2VcIik7XG53aW5kb3cucmVtb3ZlVG9Ebz0gcmVtb3ZlVG9EbztcbndpbmRvdy5lZGl0PSBlZGl0O1xubG9jYWxTdG9yYWdlUmV0cmlldmUoKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9Gb3JtXCIpO1xubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5wcmlvcml0eS50ZXh0Q29udGVudCA9IHJhbmdlLnZhbHVlO1xuY29uc3QgbXlUb0RvID0gW107XG5sb2NhbFN0b3JhZ2VSZXRyaWV2ZSgpO1xuXG5mdW5jdGlvbiBsb2NhbFN0b3JhZ2VTYXZlKCl7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvRG8nLCBKU09OLnN0cmluZ2lmeShteVRvRG8pKTtcbn1cbmZ1bmN0aW9uIGxvY2FsU3RvcmFnZVJldHJpZXZlKCl7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUb0RvJykgIT09IG51bGwpIHtcbiAgbGV0IG15VG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9EbycpKTtcbiAgcmVuZGVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9EbyhpbmRleCl7XG4gIG15VG9Eby5zcGxpY2UoaW5kZXgsMSlcbiAgcmVuZGVyKCk7XG59XG5mdW5jdGlvbiBlZGl0KGluZGV4KXtcbiAgY29uc3QgdG9EbyA9IG15VG9Eb1tpbmRleF07XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWUgPSB0b0RvLnRpdGxlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlID0gdG9Eby5kZXNjcmlwdGlvbjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlID0gdG9Eby5kdWVEYXRlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlID0gdG9Eby5wcmlvcml0eTtcbiAgbXlUb0RvLnNwbGljZShpbmRleCwxKVxuICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gdG9Ebyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLCBwcmlvcml0eSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiByZW5kZXIoKXtcbiAgbGV0IGxpYnJhcnlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuICBsaWJyYXJ5RWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yKGxldCBpPTA7aTwgbXlUb0RvLmxlbmd0aDtpKyspe1xuXG4gICAgbGV0IHRvRG8gPSBteVRvRG9baV07XG4gICAgbGV0IGJvb2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9va0VsLmlubmVySFRNTCA9IFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiYm9vay1jYXJkXCI+XG4gICAgPGgzIGNsYXNzPVwidGl0bGVcIj5UaXRsZTogJHt0b0RvLnRpdGxlfTwvaDM+XG4gICAgPGgzIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjogJHt0b0RvLmRlc2NyaXB0aW9ufTwvaDM+XG4gICAgPGgzIGNsYXNzPVwiZHVlRGF0ZVwiPkR1ZURhdGUgJHt0b0RvLmR1ZURhdGV9PC9oMz5cbiAgICA8aDMgY2xhc3M9XCJwcmlvcml0eVwiPlByaW9yaXR5ICR7dG9Eby5wcmlvcml0eX08L2gzPlxuICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LWJ0blwiIG9uY2xpY2s9XCJlZGl0KCR7aX0pXCI+RWRpdDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUtYnRuXCIgb25jbGljaz1cInJlbW92ZVRvRG8oJHtpfSlcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICA8YnI+PGJyPlxuICAgIDwvZGl2PlxuYFxuICAgIGxpYnJhcnlFbC5hcHBlbmRDaGlsZChib29rRWwpO1xuICAgIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUb0RvKCkge1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWVcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZVxuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZVxuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlXG5sZXQgbmV3VG9EbyA9IG5ldyB0b0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xubXlUb0RvLnB1c2gobmV3VG9Ebyk7XG5mb3JtLnJlc2V0KCk7XG5yZW5kZXIoKTtcblxufVxuXG5cbnJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cblxufSk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGFkZFRvRG8oKVxuICBcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///44\n')}},__webpack_exports__={};__webpack_modules__[44]()})();