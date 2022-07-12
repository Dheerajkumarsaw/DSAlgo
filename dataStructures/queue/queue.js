//!  Queue  is a Linear DataStructure

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
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
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node
            //this.tail.next = node
            // this.tail = node

        }
        this.size++
    }

    pop() {
        if (!this.head) {
            console.log("Stack is Empty");
            return
        } else {
            console.log(this.tail.data);
            this.tail.prev.next = null
            let temp = this.tail.prev
            this.tail.prev = null
            this.tail = temp
        }
        this.size--
    }

    print() {
        let temp = this.tail
        while (temp) {
            console.log(temp.data)
            temp = temp.next
        }

    }

}
let list = new LinkedList()
list.push(5)
list.push(8)
list.push(74)
list.push(9)
list.push(6)


list.pop()

list.print()