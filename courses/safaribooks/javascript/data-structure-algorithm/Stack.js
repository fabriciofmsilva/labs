/**
 * @constructor
 */
function Stack() {
  this.items = [];
  this.length = this.items.length;
}

/**
 * @param {*} item
 */
Stack.prototype.push = function(item) {
  this.length += 1;
  return this.items.push(item);
};

/**
 * @return {*}
 */
Stack.prototype.pop = function() {
  if (this.length > 0) {
    this.length -= 1;
  }

  return this.items.pop();
};

/**
 * @return {*|undefined}
 */
Stack.prototype.top = function() {
  if (this.length > 0) {
    return this.items[this.length - 1];
  }

  return undefined;
};
