/**
 *
 */
function Node(data) {
  this.data = data;
  this.neighbors = [];
}

function Graph() {
  this.nodes = [];
  this.length;
}

Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  return ++this.length;
};

Graph.prototype.addEdge = function(nodeA, nodeB) {
  var nA = this.nodes.filter(function(node) {
    return node.data.id === nodeA;
  });

  var nB = this.nodes.filter(function(node) {
    return node.data.id === nodeB;
  });

  if (nA.length && nB.length) {
    nA[0].neighbors.push(nB[0]);
    nB[0].neighbors.push(nA[0]);
  }
};

var g = new Graph();

// Create nodes
g.addNode(new Node({
  id: 1,
  articleId: 108,
  readBy: [{userId: 15}]
}));

g.addNode(new Node({
  id: 2,
  articleId: 108,
  readBy: [{userId: 15}]
}));

g.addNode(new Node({
  id: 3,
  articleId: 109,
  readBy: [{userId: 16}]
}));

g.addNode(new Node({
  id: 4,
  articleId: 110,
  readBy: [{userId: 15}, {userId: 16}]
}));

g.addNode(new Node({
  id: 5,
  articleId: 111,
  readBy: [{userId: 15}, {userId: 23}, {userId: 42}]
}));

g.addNode(new Node({
  id: 6,
  articleId: 112,
  readBy: [{userId: 23}]
}));

// Connect nodes
g.addEdge(1, 2);
g.addEdge(1, 4);
g.addEdge(1, 5);
g.addEdge(2, 4);
g.addEdge(4, 5);
g.addEdge(4, 3);
g.addEdge(5, 2);
g.addEdge(5, 6);

/**
 * Find an article that the user hasn't read, and is likely to enjoy
 */
function recd(userId) {
  // 1. Find an article this user and at least one other user have both read
  var articles = g.nodes.filter(function(node) {
    return node.data.readBy.length > 1 &&
      node.data.readBy.filter(function(user) {
        return user.userId === userId;
      }).length > 0;
  });

  if (articles.length === 0) {
    return g.nodes[0].articleId;
  }

  // 2. Find an adjacent node that this user hasn't read
  var recs = articles.map(function(article) {
    var nodes = article.neighbors.filter(function(node) {
      return node.data.readBy.filter(function(user) {
        return user.userId === userId;
      }).length === 0;
    });

    return nodes.length > 0 ? nodes[0].data : [];
  });

  return recs;
}

var recs = recd(15);
