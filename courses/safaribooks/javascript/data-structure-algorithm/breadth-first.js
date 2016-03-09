var graph = makeGraph(map.data, map.width, map.height);
var startNode = getNodeById(graph, startPos);
var targetNode = getNodeById(graph, targetPos);
var path = [];
var curNode = startNode;

var queue = new Queue();
queue.enqueue(startNode);

while (true) {
  curNode = queue.dequeue();
  curNode.visited = true;
  path.push(curNode.id);

  if (curNode.id === targetNode.id) {
    break;
  }

  curNode.adj.forEach(function(id) {
    var node = getNodeById(graph, id);

    if (!node.visited) {
      node.visited = true;
      queue.enqueue(node);
    }
  });
}
