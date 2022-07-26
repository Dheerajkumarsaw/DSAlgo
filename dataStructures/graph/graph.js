class Node {

    // Lower values indicate
    // higher priority
    constructor() {
        this.data = 0;
        this.priority = 0;
        this.next = null;
    }
}

var node = new Node();

// Function to Create A New Node
function newNode(d, p) {
    var temp = new Node();
    temp.data = d;
    temp.priority = p;
    temp.next = null;

    return temp;
}

// Return the value at head
function peek(head) {
    return head.data;
}

// Removes the element with the
// highest priority form the list
function pop(head) {
    var temp = head;
    head = head.next;
    return head;
}

// Function to push according to priority
function push(head, d, p) {
    var start = head;

    // Create new Node
    var temp = newNode(d, p);

    // Special Case: The head of list
    // has lesser priority than new node.
    // So insert new node before head node
    // and change head node.
    if (head.priority > p) {

        // Insert New Node before head
        temp.next = head;
        head = temp;
    }
    else {

        // Traverse the list and find a
        // position to insert new node
        while (start.next != null && start.next.priority < p) {
            start = start.next;
        }

        // Either at the ends of the list
        // or at required position
        temp.next = start.next;
        start.next = temp;
    }
    return head;
}

// Function to check is list is empty
function isEmpty(head) {
    return head == null ? 1 : 0;
}

// Driver code
// Create a Priority Queue
// 7.4.5.6
var pq = newNode(4, 1);
pq = push(pq, 5, 2);
pq = push(pq, 6, 3);
pq = push(pq, 7, 0);

while (isEmpty(pq) == 0) {
    document.write(peek(pq) + " ");
    pq = pop(pq);
}
let pq = new PriorityQueue();
const Queue = require("../queue/queue")
class Graph {
    constructor(Nov) {
        this.Nov = Nov;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, [])
    }

    addEdge(v, target, weight) {

        //~ Adding  Edge  from  v  to target
        this.adjList.get(v).push({ target: target, wt: weight });

        //* Adding  Edge  from taret  to v
        //? if comment this line then it will become Directed graph
        // this.adjList.get(target).push(v);
    }

    printGraph() {
        const keys = this.adjList.keys();
        for (let key of keys) {
            console.log(key, "==>", this.adjList.get(key))
        }
    }

    bfs(vertex) {
        let queue = new Queue.Queue()
        let visited = {}

        queue.enQueue(vertex)

        visited[vertex] = true

        while (!queue.isEmpty()) {
            let elem = queue.deQueue()
            console.log(elem);

            let vertices = this.adjList.get(elem)

            for (let el of vertices) {
                if (!visited[el]) {
                    queue.enQueue(el)
                    visited[el] = true
                }
            }
        }
    }

    bft() {
        let visited = {}
        let disConnectedcount = 0
        for (let key of this.adjList.keys()) {
            if (!visited[key]) {
                disConnectedcount++
                this.bft(key, visited)
            }
        }
        console.log(disConnectedcount)
    }

    dfs(vertex, visited = {}) {
        visited[vertex] = true
        console.log(vertex);

        for (let el of this.adjList.get(vertex)) {
            if (!visited[el]) {
                this.dfs(el, visited)
            }
        }
    }

    dijkstra(source = "A") {

        let dist = {}
        for (let vertex of this.adjList.keys()) {
            dist[vertex] = Infinity
        }

        dist[source] = 0
        //! Lesser Number more Priority
        pq.enQueue(source, 0)
        while (!pq.isEmpty()) {
            let source = pq.front().element // return minumum in priority que
            pq.deQueue()

            let sourceAdj = this.adjList.get(source);

            for (let curr of sourceAdj) {
                if (dist[curr.target] > dist[source] + curr.wt) {
                    dist[curr.target] = dist[source] + curr.wt
                    pq.enQueue(curr.target, dist[curr.target])
                }
            }
        }
        return dist
    }
}

let graph = new Graph(5)

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "E")
graph.addEdge("B", "E")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("C", "D")

// graph.printGraph()
graph.bft()