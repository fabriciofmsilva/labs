var task1 = {
  description: 'Buy bread',
  date: new Date('2015-12-05'),
};

var task2 = {
  description: 'Study JavaScript',
  date: new Date('2015-12-06'),
};

var task3 = {
  description: 'Read a book',
  date: new Date('2015-12-07'),
};

var list = new TaskList();

list.addTask(task1);
list.addTask(task2);
list.addTask(task3);
console.log('list', list.getList());
