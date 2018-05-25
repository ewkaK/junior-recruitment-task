var tasksList = document.getElementById('tasksList');
var form = document.getElementById('task-form');
var input = document.querySelector('input');

var tasks = [];

function addTask(task) {
  var li = document.createElement('li');
  li.innerHTML = '<input type="checkbox" name="done">' + '<span>'+task+'</span>' + "<img src='../assets/trash.png' alt='trash' />";
  tasksList.appendChild(li);
}

form.addEventListener('submit', function(event){
  event.preventDefault();
  var newTask = input.value;
  tasks.push(newTask);
  addTask(newTask);
  input.value = '';
})

tasksList.addEventListener('change', function(event){
  var done = event.target;
  console.log(done.nextSibling);
  done.nextSibling.classList.add('is-done');
})



