//!  Queue  is a Linear DataStructure

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node
            this.head = node
            //this.tail.next = node
            // this.tail = node

        }
        this.size++
    }

    pop() {
        if (!this.head) {
            console.log("Queue is Empty");
            return
        } else {
            console.log(this.tail.data);
            // this.tail.prev.next = null
            let temp = this.tail.prev
            this.tail.prev = null
            this.tail = temp
            // console.log(temp)
            temp.next = null
        }
        this.size--
    }

    print() {
        let temp = this.head
        while (temp) {
            console.log(temp.data)
            temp = temp.next
        }

    }

}

class Queue {
    constructor() {
        this.list = new DoublyLinkedList()
    }

    add(data) {
        this.list.push(data);
    }

    remove() {
        this.list.pop()
    }

    printQueue() {
        this.list.print()
    }

}
let queue = new Queue()
queue.add(5)
queue.add(8)
queue.add(74)
queue.add(9)
queue.add(200)
queue.add(21)
queue.add(100)

queue.printQueue()
console.log("===================")
queue.remove()
queue.remove()

console.log("===================")
queue.printQueue()