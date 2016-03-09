var graph = makeGraph(map.data, map.width, map.height);
var startNode = getNodeById(graph, startPos);
var targetNode = getNodeById(graph, targetPos);
var path = [];
var curNode = startNode;

var stack = new Stack();
stack.push(startNode);

while (true) {
  curNode = stack.top();
  path.push(curNode.id);
  curNode.visited = true;

  if (curNode.id === targetNode.id) {
    break;
  }

  var unvisited = 0;
  curNode.adj.forEach(function(id) {
    var node = getNodeById(graph, id);
    if (!node.visited) {
      stack.push(node);
      unvisited += 1;
    }
  });

  if (unvisited === 0) {
    stack.pop();
  }
}
