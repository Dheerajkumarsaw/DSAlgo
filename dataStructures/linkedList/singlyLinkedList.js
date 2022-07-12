class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.firstNode = null;
        this.lastNode = null;
    }

    //!  insert in first
    insertInfrontOfList(data) {
        // node is created
        // does not linked with any list
        const node = new Node(data);

        //  if list is empty

        if (!this.firstNode) {
            this.firstNode = node;
            this.lastNode = node;
        }
        else {
            const temp = this.firstNode;
            this.firstNode = node
            node.next = temp
        }
    }

    //!  insert last of list
    insertInLastOfList(data) {
        const node = new Node(data);

        if (!this.firstNode) {
            this.firstNode = node;
            this.lastNode = node;
        } else {
            this.lastNode.next = node;
            this.lastNode = node
        }
    }

    inssertAfterkthPositon(data, k) {
        let count = 1;
        let curr = this.firstNode;

        while (curr && count !== k) {
            curr = curr.next;
            count++
        }

        if (!curr && count !== k) {
            console.log("Invalid Position");
            throw Error("Invalid Position")
        }
        else if (!curr && count == k) {
            this.insertInLastOfList(data);
        }
        else {
            const node = new Node(data);
            node.next = curr.next;
            curr.next = node;
        }
    }

    //!  Print list
    printList() {
        let curr = this.firstNode;
        while (curr) {
            console.log(curr.data);
            curr = curr.next
        }
    }

    reverseList() {
        let curr = null;
        while (this.firstNode) {
            if (!curr) {
                this.lastNode = this.firstNode;
            }
            let nextNode = this.firstNode.next;
            this.firstNode.next = curr;
            curr = this.firstNode;
            this.firstNode = nextNode;
        }
        this.firstNode = curr

        //! for print nodes
        let curr1 = this.firstNode;
        while (curr1) {
            console.log(curr1.data);
            curr1 = curr1.next
        }
    }

    //~  Deleting 

    deleteFromFront() {
        if (!this.firstNode) {
            throw Error("we can't delete from Empty List")
        }

        let temp = this.firstNode;
        this.firstNode = this.firstNode.next;
        temp.next = null;
        if (!this.firstNode) {
            this.lastNode = null;
        }
    }

    deleteFromlast() {
        let curr = this.firstNode;
        while (curr.next !== this.lastNode) {
            curr = curr.next;
        }
        // console.log(curr, this.lastNode);
        curr.next = null;
        this.lastNode = curr;
    }


    deleteFromKhPositon(k) {
        let count = 1
        let curr = this.firstNode;
        if (k === 1) {
            this.deleteFromFront();
        }
        while (curr && count !== k - 1) {
            curr = curr.next;
            count++;
            if (!curr) {
                console.log("Invalid Position");
                throw Error("Invalid Position");
            }
            else {
                let targetNode = curr.next;
                curr.next = targetNode.next;
                targetNode.next = null
            }

            if (!curr.next) {
                this.lastNode = curr
            }
        }
    }

    loopStartNodeHashingTechnique() {
        let isLoopStarted = false
        let set = new Set();

        let curr = this.firstNode;
        while (curr && !isLoopStarted) {
            if (set.has(curr)) {
                isLoopStarted = true;

            }
            else {
                set.add(curr);
                curr = curr.next;
            }
        }

        if (isLoopStarted) {
            return curr
        }
        return null
    }


}

//!  TIME COMPLEXIXTY
/**
 * insertion T.C.
 * insertion  in front O(1)
 * insertion  in last O(1)
 * insertion  in between O(n)  ==>  we need to traverse the list
 * 
 * deletion T.C.
 * deletion in front O(1)
 * deletion in last O(1)
 * deletion in between  O(n)   ==>  we need to traverse the list
 */


const list = new LinkedList();
list.insertInfrontOfList(10);
list.insertInfrontOfList(7);
list.insertInfrontOfList(8);
list.insertInfrontOfList(5);
list.insertInfrontOfList(2);


// list.insertInLastOfList(10);
// list.insertInLastOfList(8);
// list.insertInLastOfList(7);
// list.insertInLastOfList(5);
// list.insertInLastOfList(2);

list.inssertAfterkthPositon(15, 3)
// list.inssertAfterkthPositon(20,8)  //! ye error dega
list.inssertAfterkthPositon(16, 3)
// list.printList()

// console.log("======================")

// list.reverseList()
// console.log("======================")

// list.deleteFromKhPositon(3)
list.printList()

// list.lastNode.next = list.firstNode.next.next.next;

// console.log(list.loopStartNodeHashingTechnique())


///========================================================================================================


/**class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //!  insert in first
    insertInfrontOfList(data) {
        // node is created
        // does not linked with any list
        const node = new Node(data);

        //  if list is empty

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            const temp = this.head;
            this.head = node
            node.next = temp
        }
    }

    //!  insert last of list
    insertInLastOfList(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node
        }
    }

    inssertAfterkthPositon(data, k) {
        let count = 1;
        let curr = this.head;

        while (curr && count !== k) {
            curr = curr.next;
            count++
        }

        if (!curr && count !== k) {
            console.log("Invalid Position");
            throw Error("Invalid Position")
        }
        else if (!curr && count == k) {
            this.insertInLastOfList(data);
        }
        else {
            const node = new Node(data);
            node.next = curr.next;
            curr.next = node;
        }
    }

    //!  Print list
    printList() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next
        }
    }

    reverseList() {
        let curr = null;
        while (this.head) {
            if (!curr) {
                this.tail = this.head;
            }
            let nextNode = this.head.next;
            this.head.next = curr;
            curr = this.head;
            this.head = nextNode;
        }
        this.head = curr

        //! for print nodes
        let curr1 = this.head;
        while (curr1) {
            console.log(curr1.data);
            curr1 = curr1.next
        }
    }

    //~  Deleting 

    deleteFromFront() {
        if (!this.head) {
            throw Error("we can't delete from Empty List")
        }

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        if (!this.head) {
            this.tail = null;
        }
    }

    deleteFromlast() {
        let curr = this.head;
        while (curr.next !== this.tail) {
            curr = curr.next;
        }
        // console.log(curr, this.tail);
        curr.next = null;
        this.tail = curr;
    }


    deleteFromKhPositon(k) {
        let count = 1
        let curr = this.head;
        if (k === 1) {
            this.deleteFromFront();
        }
        while (curr && count !== k - 1) {
            curr = curr.next;
            count++;
            if (!curr) {
                console.log("Invalid Position");
                throw Error("Invalid Position");
            }
            else {
                let targetNode = curr.next;
                curr.next = targetNode.next;
                targetNode.next = null
            }

            if (!curr.next) {
                this.tail = curr
            }
        }
    }

    loopStartNodeHashingTechnique() {
        let isLoopStarted = false
        let set = new Set();

        let curr = this.head;
        while (curr && !isLoopStarted) {
            if (set.has(curr)) {
                isLoopStarted = true;

            }
            else {
                set.add(curr);
                curr = curr.next;
            }
        }

        if (isLoopStarted) {
            return curr
        }
        return null
    }


}
 */