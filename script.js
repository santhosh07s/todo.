
// let currentIndex = 0;
// function addTodo() {
//   const inputEl = document.getElementById("inp");
//   const textNode = document.createElement("div");
//   textNode.innerHTML = "<div id='todo-" + currentIndex + "'><h4>" + inputEl.value + 
//   "</h4><button onclick='deleteTodo(" + currentIndex + ")'>Delete</button></div>";
//   const parentEl = document.getElementById("todos");
//   parentEl.appendChild(textNode);

//   currentIndex = currentIndex + 1;
// }

// function deleteTodo(index) {
//   const element = document.getElementById("todo-" + index);
//   element.parentNode.removeChild(element);
// }

let currentIndex = 0;
function addTodo() {
  const inputEl = document.getElementById("inp");
  const textNode = document.createElement("div");
  if (inputEl.value==""){
    alert("write something to procede")
  }
  else{
    textNode.innerHTML = "<div id='todo-" + currentIndex + "'><h4>" + currentIndex + ") "+inputEl.value + 
    " </h4><button onclick='deleteTodo(" + currentIndex + ")'>Delete</button></div>";
    const parentEl = document.getElementById("todos");
    parentEl.appendChild(textNode);
  
    currentIndex = currentIndex + 1;
    inputEl.value = "";
  }
}

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  element.parentNode.removeChild(element);
}

function edittodo(){

}