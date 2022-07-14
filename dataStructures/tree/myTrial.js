class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class BNode {

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
        this.size--
        return curr.data
    }

    // print() {
    //     while (this.head) {
    //         console.log(this.head.data);
    //         this.head = this.head.next;
    //     }
    // }
}

class Queue {
    constructor() {
        this.list = new LinkedList()
    }

    enQueue(data) {
        return this.list.push(data)
    }

    deQueue() {
        return this.list.pop()
    }

    isEmpty() {
        return this.list.size == 0
    }


}

class BinaryTree {
    constructor() {
        this.root = null
        this.size = 0;
    }

    insert(data) {
        let node = new BNode(data);

        if (!this.root) {
            this.root = node;
        } else {
            let queue = new Queue();

            queue.enQueue(this.root);
            while (!queue.isEmpty()) {
                let temp = queue.deQueue();

                if (temp.left) {
                    queue.enQueue(temp.left)
                } else {
                    temp.left = node;
                    return
                }

                if (temp.right) {
                    queue.enQueue(temp.right)
                } else {
                    temp.right = node
                    return
                }

            }
        }
        this.size++
    }


}


let list = new BinaryTree();

list.insert(5)
list.insert(5)
list.insert(5)
list.insert(5)
list.insert(5)
list.insert()
console.log(list)
// list.pop()
// list.print()

