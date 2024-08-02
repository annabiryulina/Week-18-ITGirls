const input = document.getElementById("input");
const buttonAdd = document.getElementById("add");
const list = document.getElementById("list");
const clearBtn = document.getElementById('clear');
const noTasks = document.getElementById("noTasks");


function createTasks() {
  const newTask = document.createElement('div');
  const newElement = document.createElement('div');
  newElement.textContent = input.value;
  newElement.style.marginLeft = "25px";
  newElement.id = 'newElement';
  const checkBox = document.createElement('input');
  checkBox.type ="checkbox";
  newTask.appendChild(newElement);
  newTask.appendChild(checkBox);
  newTask.style.display = "flex";
  newTask.style.justifyContent = "space-between";
  noTasks.style.display = 'none';
  list.appendChild(newTask);
  input.value = "";
  clearBtn.disabled = false; 
  localStorage.setItem('saveTask', JSON.stringify(list.textContent));
 }


buttonAdd.addEventListener('click', createTasks,);
function saveTask(){
  localStorage.setItem('saveTask', JSON.stringify(list));
}


function deleteTasks() {
   var node = document.getElementById("list");
   while (node.firstChild) {
    node.removeChild(node.firstChild);
   }
   noTasks.style.display = "block";
   clearBtn.disabled = true;
   }

clearBtn.addEventListener('click', deleteTasks);
