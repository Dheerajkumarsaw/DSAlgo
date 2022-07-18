class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(root, data) {

        if (!root) {
            let node = new Node(data)
            return node
        }
        if (root.data >= data) {
            root.left = this.insert(root.left, data)
        }
        else {
            root.right = this.insert(root.right, data)
        }
        return root
    }

    insertData(data) {
        this.root = this.insert(this.root, data)
    }

    inorderTav(root) {
        if (root) {
            this.inorderTav(root.left)
            console.log(root.data)
            this.inorderTav(root.right)
        }
    }
}


let bst = new BST()
// let arr = [5,23,48,79,53,47,5,46,7,41,,623,9,1,87,1,82,,58,7,9,24,54,6,4,5,]
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20]
for (let el of arr) {
    bst.insertData(arr[el])
}
bst.insertData(6)
bst.insertData(4)
bst.insertData(10)
bst.insertData(3)
bst.insertData(1)
bst.insertData(5)
bst.insertData(7)
bst.insertData(12)
bst.insertData(9)
bst.insertData(8)
bst.inorderTav(bst.root)