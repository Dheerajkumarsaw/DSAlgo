class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
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

        if (root.data > data) {
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

    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.data)
            this.inorder(root.right)
        }
    }

    findMax(root) {
        if (!root) {
            return null
        }

        if (root.right == null) {
            return root.data
        }
        return this.findMax(root.right)
    }

    findMin(root) {
        if (!root) {
            return null
        }

        if (root.left == null) {
            return root.data
        }
        return this.findMin(root.left)
    }

    search(root, data) {
        if (!root) {
            return null
        }

        if (root.data > data) {
            return this.search(root.left, data)
        }
        else if (root.data < data) {
            return this.search(root.right, data)
        } else {
            return root
        }
    }
    
    //! Succsessor  deletion type
    delete(root, data) {
        if (!root) {
            console.log("no data")
            return null;
        }

        if (root.data > data) {
            root.left = this.delete(root.left, data)
        } else if (root.data < data) {
            root.right = this.delete(root.right, data)
        } else {

            if (!root.left && !root.right) {
                // con
                return null
            } else if (root.left && root.right) {
                let max = this.findMax(root.right)
                root.data = max
                root.right = this.delete(root.right, root.data)
            } else {
                if (root.right == null) {
                    root = root.left
                } else {
                    root = root.right
                }
            }
        }
        return root
    }
}

let bst = new BST()

bst.insertData(7)
bst.insertData(5)
bst.insertData(10)
bst.insertData(6)
bst.insertData(4)
bst.insertData(11)
bst.insertData(9)
bst.insertData(12)
bst.insertData(13)
bst.insertData(3)
bst.insertData(2)
bst.insertData(1)
bst.insertData(14)
bst.insertData(15)
bst.insertData(155)

bst.inorder(bst.root)
console.log("===============================")
console.log(bst.findMax(bst.root))
console.log("===============================")
console.log(bst.findMin(bst.root))
console.log("===============================")
console.log(bst.search(bst.root, 50))
console.log("===============================")
bst.delete(bst.root, 155)
bst.inorder(bst.root)