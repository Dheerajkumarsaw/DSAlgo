//!  Stack Using Queue

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0

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

    removeElement() {
        if (this.size == 0) {
            console.log("Stack is Empty")
        } else {
            let temp = this.head.next;
            console.log(this.head.data);
            this.head.next = null;
            this.head = temp;
        }
        this.size--;
    }

    print() {
        if (this.size === 0) {
            console.log("Stack is Empty");
            return
        }

        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
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
        this.list.removeElement();
    }

    printQueue() {
        this.list.print();
    }

    get getSize() {
        return this.list.size
    }

    isEmpty() {
        return this.list.size == 0;
    }
}

class StackUsingQueue {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
        this.size = 0;
    }

    push(data) {
        if (this.q1.isEmpty()) {
            this.q2.enQueue(data);
        } else {
            this.q1.enQueue(data);
        }
        this.size++;
    }

    pop() {
        this.size = Math.max(0, this.size - 1);

        if (this.q1.isEmpty()) {
            while (this.q2.getSize !== 1) {
                this.q1.enQueue(this.q2.deQueue())
            }
            this.size--;
            return this.q2.deQueue()
        } else {
            while (this.q1.getSize !== 1) {
                this.q2.enQueue(this.q1.deQueue())
            }
            this.size--;
            return this.q1.deQueue()
        }
    }

    isEmptyStack() {
        return this.size === 0
    }
}