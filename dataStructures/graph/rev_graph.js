const Queue = require("../graph/queueForGraph")

class Graph {
    constructor(noOfVertex) {
        this.noOfVertex = noOfVertex
        this.adjList = new Map()
    }

    addVertex(v) {
        this.adjList.set(v, [])
    }

    addEdge(v, target) {
        //! Undirected  Graph 
        this.adjList.get(v).push(target)
        //? for making directed graph
        // this.adjList.get(target).push(v)
    }


    addEdgeInDirectedGraph(v, target) {
        this.adjList.get(v).push(target)
        this.adjList.get(target).push(v)
    }


    printGraph() {
        let keys = this.adjList.keys()

        for (let key of keys) {
            console.log(key, "==>", this.adjList.get(key))
        }
    }

    BFS(vertex, visited = {}) {
        let queue = new Queue() // take que to implement bfs
        // let visited = {}

        queue.enQueue(vertex)
        visited[vertex] = true // makring visited

        while (!queue.isEmpty()) {
            let temp = queue.deQueue()

            console.log(temp)
            const vertices = this.adjList.get(temp)

            for (let el of vertices) {
                if (!visited[el]) {
                    queue.enQueue(el) // adding in que if not visited
                    visited[el] = true
                }
            }
        }
    }

    BFT() {
        let visited = {}
        let disConnectedcount = 0
        for (let key of this.adjList.keys()) {

            if (!visited[key]) {
                disConnectedcount++
                this.BFS(key, visited)
            }
        }
        console.log(disConnectedcount)
    }

    DFS(vertex, visited = {}) {

        visited[vertex] = true
        console.log(vertex)

        for (let el of this.adjList.get(vertex)) {
            if (!visited[el]) {
                this.DFS(el, visited)
            }
        }
    }
}

let arr = ["A", "B", "C", "D", "E", "G", "F", "H"]
let graph = new Graph(5)
for (let el of arr) {
    graph.addVertex(el)
}
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "D")
graph.addEdge("A", "E")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("E", "D")
graph.addEdge("D", "B")
// console.log(graph)
console.log("======================")
graph.printGraph()
console.log("============================")

graph.BFS("A")
console.log("============================")

graph.DFS("A")
console.log("============================")
graph.BFT()
console.log("============================")

let directedGraph = new Graph(5)
for (let el of arr) {
    directedGraph.addVertex(el)
}

directedGraph.addEdgeInDirectedGraph("A", "D")
directedGraph.addEdgeInDirectedGraph("A", "C")
directedGraph.addEdgeInDirectedGraph("A", "E")
directedGraph.addEdgeInDirectedGraph("A", "B")
directedGraph.addEdgeInDirectedGraph("B", "D")
directedGraph.addEdgeInDirectedGraph("C", "E")
directedGraph.addEdgeInDirectedGraph("D", "C")

directedGraph.printGraph()
console.log("============================")
directedGraph.BFS("B")
console.log("============================")
directedGraph.DFS("A")
console.log("============================")
directedGraph.BFT()