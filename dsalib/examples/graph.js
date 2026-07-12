import { Graph, GraphTraversal } from "../src/index.js";

console.log("=== Graph Example ===");

// 1. Constructing an Undirected, Unweighted Graph from Edges
console.log("\n1. Undirected, Unweighted Graph from Edges:");
const graph1 = Graph.fromEdges([
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [4, 5]
]);
graph1.print();

// Traversing graph1
const bfsOrder = [];
graph1.bfs(1, (v) => bfsOrder.push(v));
console.log("BFS starting from vertex 1:", bfsOrder);

const dfsOrder = [];
graph1.dfs(1, (v) => dfsOrder.push(v));
console.log("DFS starting from vertex 1:", dfsOrder);

// 2. Constructing a Directed, Weighted Graph from Edges
console.log("\n2. Directed, Weighted Graph from Edges:");
const graph2 = Graph.fromEdges([
  [1, 2, 5],
  [1, 3, 10],
  [2, 4, 3],
  [3, 4, 2],
  [4, 5, 8]
], { directed: true, weighted: true });
graph2.print();

console.log("Neighbors of vertex 1:", graph2.neighbors(1));
console.log("Neighbor IDs of vertex 1:", graph2.neighborIds(1));
console.log(`Has edge from 1 to 2? ${graph2.hasEdge(1, 2)}`);
console.log(`Has edge from 2 to 1? ${graph2.hasEdge(2, 1)} (Directed)`);

// 3. Constructing Graph from Adjacency List Object
console.log("\n3. Graph from Adjacency List Object:");
const adjList = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D"],
  D: []
};
const graph3 = Graph.fromAdjacencyList(adjList, { directed: true });
graph3.print();
