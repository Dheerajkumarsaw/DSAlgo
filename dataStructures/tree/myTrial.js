class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    pop() {
        if (this.size == 0) {
            console.log("Queue is Empty");
            return
        }
        let curr = this.head;
        console.log(curr)
        this.head = curr.next;
        curr.next = null
    }

    print() {
        while (this.head) {
            console.log(this.head.data);
            this.head = this.head.next;
        }
    }
}


let list = new LinkedList();

list.push(5)
list.push(5)
list.push(5)
list.push(5)
list.push(5)
list.print()
console.log("================")
list.pop()
list.print()

