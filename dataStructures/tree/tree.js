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

    addElement(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.left = node;
            this.tail = node;
        }
        this.size++
    }

    remove() {
        if (this.size == 0) {
            throw Error("queue is empty")

        }
        let cur = this.head
        this.head = cur.next
        cur.next = null;
        return cur.data
    }
}


class Queue {
    constructor() {
        this.list = new LinkedList()
    }

    enQueue(data) {
        return this.list.addElement(data)
    }

    deQueue() {
        return this.list.remove()
    }

    getSize() {
        return this.list.size;
    }

    isEmpty() {
        return this.list.size == 0
    }

}

let isFound = false;
let totalLeafCount = 0;


class BinaryTree {
    constructor() {
        this.root = null
        this.size = 0
    }

    insert(data) {
        let node = new Node(data);

        if (!this.root) {
            this.root = node;
        } else {
            let queue = new Queue()

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
    }

    // Tree Traversal Ways
    // inOrderTraversal    {left => data => right}
    // preOrdertraversal   {data => left => right}
    // postOrderTraversal  {left => right => data}

    inOrderTraversal(root) {
        if (!root) {
            return;
        }

        this.inOrderTraversal(root.left);
        console.log(root.data);
        this.inOrderTraversal(root.right);
    }

    preOrderTraversal(root) {
        if (!root) {
            return;
        }

        console.log(root.data);
        this.preOrderTraversal(root.left);
        this.preOrderTraversal(root.right);
    }

    postOrderTrabversal(root) {
        if (!root) {
            return;
        }

        this.postOrderTrabversal(root.left);
        this.postOrderTrabversal(root.right);
        console.log(root.data)
    }

    postOrderSearching(root, val) {
        if (!root) {
            return;
        }

        this.postOrderSearching(root.left, val);
        this.postOrderSearching(root.right, val);

        if (root.data === val) {
            isFound = true
            console.log(root.data, "Given value is Found")
        }
    }

    heightOfTree(root) {
        if (!root) {
            return 0
        }

        let leftHeight = this.heightOfTree(root.left);
        let rightHeight = this.heightOfTree(root.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    totalLeafNode(root) {
        if (!root) {
            return;
        }

        if (root.left == null && root.right == null) {
            totalLeafCount++
        }

        this.totalLeafNode(root.left);
        this.totalLeafNode(root.right)
    }
}

let Tree = new BinaryTree()

Tree.insert(1)
Tree.insert(2)
Tree.insert(3)
Tree.insert(4)
Tree.insert(5)
Tree.insert(6)
Tree.insert(7)
Tree.insert(8)
Tree.insert(9)
Tree.insert(10)
Tree.insert(11)
Tree.insert(12)

// console.log(Tree.root)
Tree.inOrderTraversal(Tree.root)
console.log("=======================")
Tree.preOrderTraversal(Tree.root)
console.log("=======================")
Tree.postOrderTrabversal(Tree.root)

Tree.postOrderSearching(Tree.root, 5)
console.log(isFound == false ? (`Not Found ,${isFound}`) : isFound)

console.log(Tree.heightOfTree(Tree.root))

Tree.totalLeafNode(Tree.root)
console.log(totalLeafCount)