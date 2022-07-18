class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
// ! TC of   BST
//* insertion  O(logn)

class BST {
    constructor() {
        this.root = null
    }

    insertRecursively(root, data) {

        if (!root) {
            let node = new Node(data);
            return node
        }

        if (root.data > data) {
            root.left = this.insertRecursively(root.left, data)
        } else {
            root.right = this.insertRecursively(root.right, data)
        }
        return root
    }

    insert(data) {
        this.root = this.insertRecursively(this.root, data)
    }

    inorder(root) {

        if (root) {
            this.inorder(root.left)
            console.log(root.data)
            this.inorder(root.right)
        }
    }

    search(root, data) {
        //! my
        if (!root) {
            return null
        }
        if (root.data == data) {
            return true
        }
        if (root.data > data && root !== null) {
            return this.search(root.left, data)
        } else {
            return this.search(root.right, data)
        }
        //!sir
        // if (root.data > data) {
        //     return this.search(root.left, data)
        // } else if (root.data < data) {
        //     return this.search(root.right, data)
        // }
        // return root
    }

    findMax(root) {
        if (!root) {
            return null
        }
        if (root.right == null) {
            return root
        }
        return this.findMax(root.right)
    }

    //? TC O(logn)
    findMin(root) {
        if (!root) {
            return null
        }
        if (root.left == null) {
            return root
        }
        return this.findMin(root.left)
    }

    //! TC  O(n^2)
    findMaxInTree(root) {

        if (!root) {
            return -Infinity
        }

        return Math.max(this.findMaxInTree(root.left), this.findMaxInTree(root.right), root.data)
    }

    findMinInTree(root) {
        if (!root) {
            return Infinity
        }

        return Math.min(this.findMinInTree(root.left), this.findMinInTree(root.right), root.data)
    }

    //* Delete root in BST
    delete(root, data) {
        if (!root) {
            return null
        }

        if (root.data > data) {
            root.left = this.delete(root.left, data)
        } else if (root.data < data) {
            root.right = this.delete(root.right, data)
        }
        else {
            if (!root.left && !root.right) {
                return null
            }

            else if (root.left && root.right) {
                let node = this.findMax(root.left);
                root.data = node.data;
                root.left = this.delete(root.left, root.data)
            }
            else {
                let curr = root
                if (root.left === null) {
                    root = root.right
                }
                if (root.right === null) {
                    root = root.left
                }
            }
        }
        return root
    }

    //? is BST or not
    isBST(root) {
        if (!root) {
            return true;
        }

        if (root.left != null && this.findMaxInTree(root.left) > root.data) {
            return false
        }
        if (root.right != null && this.findMinInTree(root.right) < root.data) {
            return false
        }

        return this.isBST(root.left) && this.isBST(root.right)

    }

    isBSTOptimal(root, minVal, maxVal) {

        if (!root) {
            return true;
        }

        if (root.data < minVal) {
            return false
        }
        if (root.data > maxVal) {
            return false
        }

        return this.isBSTOptimal(root.left, minVal, root.data) && this.isBSTOptimal(root.right, root.data, maxVal)
    }



}


let tree = new BST()
let arr = [6, 4, 10, 3, 1, 5, 7, 12, 9, 8]

for (let el of arr) {
    tree.insert(el);

}

console.log("==========================")
console.log(tree.findMax(tree.root))
console.log("==========================")
console.log(tree.findMaxInTree(tree.root))
console.log(tree.findMinInTree(tree.root))
console.log("==========================")
// tree.root.left.left.data = 50
console.log(tree.findMaxInTree(tree.root))
console.log("==========================")
// tree.inorder(tree.root)
console.log("==========================")
console.log(tree.isBST(tree.root))
console.log(tree.isBSTOptimal(tree.root, -Infinity, Infinity))
console.log(tree.findMin(tree.root))
tree.delete(tree.root, 1)
console.log(tree.search(tree.root, 1))
console.log(tree.search(tree.root, 1))
tree.inorder(tree.root)