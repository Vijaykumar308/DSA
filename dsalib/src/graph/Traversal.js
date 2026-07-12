/**
 * Traversal algorithms for Graph data structures.
 */
export class Traversal {
  /**
   * Breadth-First Search (BFS) starting from a vertex.
   * @param {Graph} graph - The graph instance.
   * @param {any} startVertex - The starting vertex ID.
   * @param {function} callback - Callback function(vertexId).
   */
  static bfs(graph, startVertex, callback) {
    if (!graph.adjacencyList.has(startVertex)) return;

    const visited = new Set();
    const queue = [startVertex];
    visited.add(startVertex);

    while (queue.length > 0) {
      const u = queue.shift();
      callback(u);

      const neighbors = graph.neighborIds(u);
      for (const v of neighbors) {
        if (!visited.has(v)) {
          visited.add(v);
          queue.push(v);
        }
      }
    }
  }

  /**
   * Depth-First Search (DFS) starting from a vertex (recursive).
   * @param {Graph} graph - The graph instance.
   * @param {any} startVertex - The starting vertex ID.
   * @param {function} callback - Callback function(vertexId).
   */
  static dfs(graph, startVertex, callback) {
    if (!graph.adjacencyList.has(startVertex)) return;

    const visited = new Set();

    const explore = (u) => {
      visited.add(u);
      callback(u);

      const neighbors = graph.neighborIds(u);
      for (const v of neighbors) {
        if (!visited.has(v)) {
          explore(v);
        }
      }
    };

    explore(startVertex);
  }
}
