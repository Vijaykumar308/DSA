import { GraphNode } from "./GraphNode.js";
import { Traversal } from "./Traversal.js";

/**
 * Adjacency List-based Graph implementation.
 * Supports Directed/Undirected and Weighted/Unweighted graphs.
 */
export class Graph {
  /**
   * Creates a new Graph.
   * @param {object} [options]
   * @param {boolean} [options.directed=false] - True if directed, false if undirected.
   * @param {boolean} [options.weighted=false] - True if weighted, false if unweighted.
   */
  constructor({ directed = false, weighted = false } = {}) {
    /** @type {boolean} */
    this.directed = directed;
    /** @type {boolean} */
    this.weighted = weighted;
    /** @type {Map<any, GraphNode>} */
    this.vertices = new Map();
    /** @type {Map<any, any[]>} */
    this.adjacencyList = new Map();
  }

  /**
   * Adds a vertex to the graph.
   * @param {any|GraphNode} v - The vertex value or GraphNode instance.
   * @returns {Graph} The graph instance for chaining.
   */
  addVertex(v) {
    const val = v instanceof GraphNode ? v.val : v;
    if (!this.vertices.has(val)) {
      this.vertices.set(val, v instanceof GraphNode ? v : new GraphNode(val));
      this.adjacencyList.set(val, []);
    }
    return this;
  }

  /**
   * Removes a vertex and all its connected edges from the graph.
   * @param {any|GraphNode} v - The vertex ID or GraphNode instance to remove.
   * @returns {Graph} The graph instance for chaining.
   */
  removeVertex(v) {
    const val = v instanceof GraphNode ? v.val : v;
    if (!this.vertices.has(val)) return this;

    // Remove all edges pointing to this vertex
    for (const [u, edges] of this.adjacencyList.entries()) {
      if (u === val) continue;
      if (this.weighted) {
        this.adjacencyList.set(u, edges.filter(edge => edge.node !== val));
      } else {
        this.adjacencyList.set(u, edges.filter(node => node !== val));
      }
    }

    this.adjacencyList.delete(val);
    this.vertices.delete(val);
    return this;
  }

  /**
   * Adds an edge between two vertices. Automatically adds vertices if they don't exist.
   * @param {any|GraphNode} u - Source vertex.
   * @param {any|GraphNode} v - Destination vertex.
   * @param {number|null} [weight=null] - Weight of the edge (required if weighted).
   * @returns {Graph} The graph instance for chaining.
   */
  addEdge(u, v, weight = null) {
    const uVal = u instanceof GraphNode ? u.val : u;
    const vVal = v instanceof GraphNode ? v.val : v;

    this.addVertex(uVal);
    this.addVertex(vVal);

    const edgesU = this.adjacencyList.get(uVal);

    if (this.weighted) {
      const edgeWeight = weight !== null ? weight : 1;
      const index = edgesU.findIndex(edge => edge.node === vVal);
      if (index !== -1) {
        edgesU[index].weight = edgeWeight;
      } else {
        edgesU.push({ node: vVal, weight: edgeWeight });
      }
    } else {
      if (!edgesU.includes(vVal)) {
        edgesU.push(vVal);
      }
    }

    if (!this.directed) {
      const edgesV = this.adjacencyList.get(vVal);
      if (this.weighted) {
        const edgeWeight = weight !== null ? weight : 1;
        const index = edgesV.findIndex(edge => edge.node === uVal);
        if (index !== -1) {
          edgesV[index].weight = edgeWeight;
        } else {
          edgesV.push({ node: uVal, weight: edgeWeight });
        }
      } else {
        if (!edgesV.includes(uVal)) {
          edgesV.push(uVal);
        }
      }
    }

    return this;
  }

  /**
   * Removes an edge between two vertices.
   * @param {any|GraphNode} u - Source vertex.
   * @param {any|GraphNode} v - Destination vertex.
   * @returns {Graph} The graph instance for chaining.
   */
  removeEdge(u, v) {
    const uVal = u instanceof GraphNode ? u.val : u;
    const vVal = v instanceof GraphNode ? v.val : v;

    if (this.adjacencyList.has(uVal)) {
      const edges = this.adjacencyList.get(uVal);
      if (this.weighted) {
        this.adjacencyList.set(uVal, edges.filter(edge => edge.node !== vVal));
      } else {
        this.adjacencyList.set(uVal, edges.filter(node => node !== vVal));
      }
    }

    if (!this.directed && this.adjacencyList.has(vVal)) {
      const edges = this.adjacencyList.get(vVal);
      if (this.weighted) {
        this.adjacencyList.set(vVal, edges.filter(edge => edge.node !== uVal));
      } else {
        this.adjacencyList.set(vVal, edges.filter(node => node !== uVal));
      }
    }

    return this;
  }

  /**
   * Checks if an edge exists between two vertices.
   * @param {any|GraphNode} u - Source vertex.
   * @param {any|GraphNode} v - Destination vertex.
   * @returns {boolean} True if edge exists, false otherwise.
   */
  hasEdge(u, v) {
    const uVal = u instanceof GraphNode ? u.val : u;
    const vVal = v instanceof GraphNode ? v.val : v;

    if (!this.adjacencyList.has(uVal)) return false;

    const edges = this.adjacencyList.get(uVal);
    if (this.weighted) {
      return edges.some(edge => edge.node === vVal);
    } else {
      return edges.includes(vVal);
    }
  }

  /**
   * Returns a copy of neighbors of a vertex.
   * @param {any|GraphNode} u - The vertex ID.
   * @returns {any[]} Array of neighbor IDs (unweighted) or neighbor edge objects (weighted).
   */
  neighbors(u) {
    const uVal = u instanceof GraphNode ? u.val : u;
    if (!this.adjacencyList.has(uVal)) return [];
    return [...this.adjacencyList.get(uVal)];
  }

  /**
   * Returns neighbor IDs regardless of whether graph is weighted or unweighted.
   * Convenient helper for traversals.
   * @param {any|GraphNode} u - The vertex ID.
   * @returns {any[]} Array of neighbor vertex IDs.
   */
  neighborIds(u) {
    const uVal = u instanceof GraphNode ? u.val : u;
    if (!this.adjacencyList.has(uVal)) return [];
    const edges = this.adjacencyList.get(uVal);
    if (this.weighted) {
      return edges.map(edge => edge.node);
    }
    return [...edges];
  }

  /**
   * Breadth-First Search (BFS) traversal.
   * @param {any} startVertex - Starting vertex value.
   * @param {function} callback - Callback function(vertexVal).
   */
  bfs(startVertex, callback) {
    Traversal.bfs(this, startVertex, callback);
  }

  /**
   * Depth-First Search (DFS) traversal.
   * @param {any} startVertex - Starting vertex value.
   * @param {function} callback - Callback function(vertexVal).
   */
  dfs(startVertex, callback) {
    Traversal.dfs(this, startVertex, callback);
  }

  /**
   * Builds a Graph from a list of edges.
   * @param {any[][]} edges - Edge definitions (e.g., [[1, 2], [2, 3]] or [[1, 2, 5], [2, 3, 10]]).
   * @param {object} [options]
   * @param {boolean} [options.directed=false]
   * @param {boolean} [options.weighted=false]
   * @returns {Graph} A new Graph instance.
   */
  static fromEdges(edges, options = {}) {
    const graph = new Graph(options);
    if (!Array.isArray(edges)) return graph;

    for (const edge of edges) {
      if (!Array.isArray(edge) || edge.length < 2) continue;
      const [u, v, w] = edge;
      graph.addEdge(u, v, graph.weighted ? (w !== undefined ? w : 1) : null);
    }
    return graph;
  }

  /**
   * Builds a Graph from an adjacency list object or map.
   * @param {object|Map<any, any[]>} adjList - The adjacency list dictionary.
   * @param {object} [options]
   * @param {boolean} [options.directed=false]
   * @param {boolean} [options.weighted=false]
   * @returns {Graph} A new Graph instance.
   */
  static fromAdjacencyList(adjList, options = {}) {
    const graph = new Graph(options);
    if (!adjList || typeof adjList !== "object") return graph;

    const entries = adjList instanceof Map ? adjList.entries() : Object.entries(adjList);

    for (const [u, neighbors] of entries) {
      const uKey = isNaN(u) ? u : Number(u);
      graph.addVertex(uKey);
      if (!Array.isArray(neighbors)) continue;

      for (const neighbor of neighbors) {
        if (graph.weighted && neighbor && typeof neighbor === "object" && "node" in neighbor) {
          const vKey = isNaN(neighbor.node) ? neighbor.node : Number(neighbor.node);
          graph.addEdge(uKey, vKey, neighbor.weight);
        } else {
          const vKey = isNaN(neighbor) ? neighbor : Number(neighbor);
          graph.addEdge(uKey, vKey);
        }
      }
    }
    return graph;
  }

  /**
   * Prints the adjacency list representation of the graph.
   * @returns {string} The string representation.
   */
  print() {
    const lines = [];
    for (const [u, neighbors] of this.adjacencyList.entries()) {
      if (this.weighted) {
        const neighborsStr = neighbors
          .map(edge => `${edge.node}(w:${edge.weight})`)
          .join(", ");
        lines.push(`${u} -> [ ${neighborsStr} ]`);
      } else {
        lines.push(`${u} -> [ ${neighbors.join(", ")} ]`);
      }
    }
    const output = lines.join("\n");
    console.log(output || "(Empty Graph)");
    return output;
  }
}
