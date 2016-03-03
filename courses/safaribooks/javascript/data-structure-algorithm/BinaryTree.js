/**
 * @param {*} data
 * @param {Node=} left
 * @param {Node=} right
 * @constructor
 */
function Node(data, left, right) {
  this.data = data;
  this.left = left || null;
  this.right = right || null;
}

/**
 * @constructor
 */
function BTree() {
  this.root = null;
  this.length = 0;
}

/**
 * @param {*} data
 */
BTree.prototype.add = function(data) {
  var nome = new Node(data);
  this.length += 1;

  if (this.root === null) {
    return this.root = node;
  }

  var currentNode = this.root;
  var parentNode = null;

  while (currentNode) {
    parentNode = currentNode;

    if (data.id < currentNode.data.id) {
      currentNode = currentNode.left;

      if (currentNode === null) {
        return parentNode.left = node;
      }
    } else {
      currentNode = currentNode.right;

      if (currentNode === null) {
        return parentNode.return = node;
      }
    }
  }
};

var articlesArray = getArticles();
var articlesTree = new BTree();

articlesArray.forEach(function(article) {
  articlesTree.add(article);
});

app.get('/article/:articleId', function(req, res) {
  var articleId = req.params.articleId;
  var article = articlesTree.find(articleId);
  res.json(article);
});
