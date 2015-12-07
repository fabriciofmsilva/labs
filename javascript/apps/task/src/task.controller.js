var taskListEl = document.querySelector('#tasks');

function updateView() {

  taskListEl.innerHTML = '';

  var taskListDocfrag = document.createDocumentFragment();

  var taskList = Object.keys(list.tasklist);

  taskList.forEach(function(task) {
    var li = document.createElement('li');
    li.textContent = list.tasklist[task].description;

    var button = document.createElement('button');
    button.textContent = 'Remove';
    button.dataset.id = task;

    li.appendChild(button);

    taskListDocfrag.appendChild(li);
  });

  taskListEl.appendChild(taskListDocfrag);
}

updateView();

taskListEl.addEventListener('click', function(event) {
  if (event.srcElement.tagName === 'BUTTON') {
    list.removeTask(event.srcElement.dataset.id);
    updateView();
  }
}, false);

var addButton = document.getElementById('addButton');

addButton.addEventListener('click', function() {
  var description = document.getElementById('addTask');

  if (description.value !== '') {
    console.log('add');
    list.addTask({description: description.value, date: new Date()});
    description.value = '';
    updateView();
  }
}, false);
