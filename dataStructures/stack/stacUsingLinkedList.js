//!  Stack  using  LikedList

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    pushBack(data) {
        let node = new Node(data);
        if (this.size == 0) {
            this.tail = node;
        }
        // if (!this.head) {
        //     this.tail = node;
        // }
        node.next = this.head;
        this.head = node;

        this.size++;
    }

    popBack() {

        if (!this.head) {
            throw Error("Stack is Empty")
        }
        let temp = this.head.next;
        console.log(this.head.data);
        this.head.next = null;
        this.head = temp
        this.size--
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList()
    }

    push(data) {
        this.list.pushBack(data);
    }

    pop() {
        this.list.popBack();
    }

    getsize() {
        console.log("size ===" , this.list.size);
    }

    print() {
        let temp = this.list.head;

        while (temp) {
            console.log(temp.data);
            temp = temp.next;

        }
    }

    isEmpty(){
        return this.list.size == 0
    }

}

let stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(4)
stack.push(3)
stack.push(6)
stack.push(7)
stack.push(9)
stack.print()
stack.getsize()
console.log("==============================")
stack.pop()
stack.pop()
stack.getsize()

console.log("==============================")
stack.print()
stack.getsize()
console.log(stack.isEmpty())
