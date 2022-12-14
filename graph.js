class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacency[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacency[vertex2].filter(v => v !== vertex1)
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]; 
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");