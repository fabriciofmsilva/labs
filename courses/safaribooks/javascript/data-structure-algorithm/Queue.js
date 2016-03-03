/**
 * @param {Array=} optElements
 * @constructor
 */
function Queue(optElements) {
  if (optElements instanceof Array) {
    this.items = optElements;
  } else {
    this.items = [];
  }

  this.length = this.items.length;
}

/**
 * @param {*} item
 */
Queue.prototype.enqueue = function(item) {
  this.length += 1;
  return this.items.push(item);
};

/**
 * @return {*}
 */
Queue.prototype.dequeue = function(item) {
  if (this.length > 0 ) {
    this.length -= 1;
  }

  return this.items.shift();
};

app.get('/insert-task/:data', function(req, res, next) {
  var data = {
    timestamp: Date.now(),
    payload: req.params.data
  };

  tasks.enqueue(data);
  next();
});

app.get('/process-taks', function(req, res, next) {
  var task = tasks.dequeue();
  service.save(task.payload);
  next();
});
