/**
  * @param {*} data
  * @construtor
  */
function Node(data) {
  this.data = data;
  this.next = null;
}

/**
 * @construtor
 */
function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

/**
 * @param {*} data
 */
LinkedList.prototype.add = function(data) {
  var node = new Node(data);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  }

  this.tail.next = node;
  this.tail = node;
  this.length += 1;

  return node;
};

/**
 * @param {Node} node
 */
LinkedList.prototype.delete = function(node) {
  if (this.length === 1) {
    return false;
  }

  if (node instanceof Node) {
    for (var _node = this.head; _node !== null; _node = _node.next) {
      if (_node.next === node) {
        _node.next = node.next;
        this.length -= 1;
        return true;
      }
    }
  } else {
    for (var _node = this.head; _node !== null; _node = node.next) {
      if (_node.next === this.tail) {
        _node.next = null;
        this.tail = _node;
        this.length -= 1;
        return true;
      }
    }
  }

  return false;
};

/**
 *
 */
LinkedList.prototype.clear = function() {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

/**
 * @param {Node} node
 */
LinkedList.prototype.has = function(node) {
  for (var _node = list.head; _node !== null; _node = _node.next) {
    if (_node === node) {
      return true;
    }
  }

  return false;
};



var friends = new LinkedList();

// ADD
var samira = friends.add('Samira');
friends.add('Juliano');
friends.add('Luci', samira);

// friends;
// > [{data: 'Luci'}, {data: 'Samira'}, {data: 'Juliano'}]

// DELETE
friends.delete();
// > 2

// friends.delete(someFriend);


// CLEAR
friends.length();
// > 2

friends.clear();
friends.length();
// > 0

// HAS
var friends = new LinkedList();
friends.has('Mara');
// > false

friends.add('Samira');
friends.has('Samira');


// ITERATING
var list = new LinkedList();
list.add('rodrigo');
list.add('mara');
list.add('samira');
list.add('juliano');

for (var node = list.head; node !== null; node = node.next) {
  // node
  // > {data: 'rodrigo', next: [object]}
  // > {data: 'mara', next: [object]}
  // > {data: 'samira', next: [object]}
  // > {data: 'juliano', next: null}
}


article = {
  id: 23465,
  title: 'Some people almost did something',
  author: 'Rodrigo Silveira',
  publish_date: '2015-01-01T10:11:12',
  body: '...'
};

articleArray = getArticles();
articleList = getListFromArray(articleArray);

function insertArticle(article) {
  var head = articleList.head;
  var node = head;

  for (var _node = head; _node !== null; _node = _node.next) {
    if (_node.data.author === article.author) {
      node = _node;
      break;
    }
  }

  articleList.add(article, node);
}
