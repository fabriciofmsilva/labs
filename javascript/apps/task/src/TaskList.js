function TaskList() {
  this.tasklist = {};
}

TaskList.prototype.addTask = function(task) {
  var id = uuid();
  //this.tasklist.[id] = {};
  this.tasklist[id] = new Task(task);

};

TaskList.prototype.removeTask = function(id) {
  delete this.tasklist[id];
};

TaskList.prototype.getList = function() {
  return this.tasklist;
}
