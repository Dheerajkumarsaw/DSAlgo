//? Queue  Using singly linkedList

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    appendElement(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeELement() {
        if (this.size === 0) {
            console.log("Queue is Empty");
            return
        }
        let temp = this.head;
        this.head = temp.next;
        temp.next = null
        this.size--;
        return temp.data

    }

    print() {
        if (this.size == 0) {
            console.log("Queue is Empty")
        }
        let temp = this.head
        while (temp) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}


class Queue {
    constructor() {
        this.list = new SinglyLinkedList();
    }

    enQueue(data) {
        this.list.appendElement(data);
    }

    deQueue() {
        return this.list.removeELement();
    }

    printQueue() {
        this.list.print();
    }

    get getsize() {
        console.log(this.list.size)
    }

    frontElement() {
        console.log(this.list.head.data);
    }

    isEmpty() {
        return this.list.size == 0
    }
}

module.exports= Queue
// let queue = new Queue();

// queue.enQueue(5)
// queue.enQueue(3)
// queue.enQueue(8)
// queue.enQueue(4)
// queue.enQueue(9)
// queue.enQueue(6)

// queue.printQueue()
// console.log("+=================")

// queue.deQueue()
// queue.deQueue()

// console.log("+=================")
// queue.printQueue()
// console.log("+=================")
// queue.getsize

// console.log("+=================")
// queue.frontElement()

// console.log("+=================")
// queue.isEmpty()
// // let list = new SinglyLinkedList()

// // list.appendElement(5)
// // list.appendElement(5)
// // list.appendElement(5)
// // list.appendElement(5)
// // list.appendElement(5)
// // list.print()
// // list.removeELement()
// // list.removeELement()
// list.removeELement()
// list.removeELement()
// list.removeELement()
// list.removeELement()
// console.log("+=================")

// list.print()
// console.log(list.size)
