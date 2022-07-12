class DNode {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //!  INSERTION IN LIST

    insertAtBegginning(data) {
        // if list is empty
        const dNode = new DNode(data)
        if (!this.head) {
            this.head = dNode;
            this.tail = dNode;
        } else {
            dNode.next = this.head
            this.head.prev = dNode;
            this.head = dNode;
        }
        this.size += 1
    }

    insertAtEnd(data) {
        const dNode = new DNode(data);
        if (this.size == 0) {
            throw Error("List is Empty")
        }
        if (!this.tail) {
            this.head = dNode;
            this.tail = dNode;
        }
        this.tail.next = dNode;
        dNode.prev = this.tail;
        this.tail = dNode;

        this.size += 1
    }

    insertAtKthPosition(data, k) {
        if (this.size < k) {
            throw Error("Invalid Position")
        }
        if (this.size === k) {
            this.insertAtEnd(data);
        } else {
            const dNode = new DNode(data);
            let count = 1;
            let curr = this.head;
            while (count !== k) {
                curr = curr.next;
                count++
            }
            // we found  the position
            let nextNode = curr.next;
            curr.next = dNode;
            dNode.prev = curr;
            dNode.next = nextNode;
            nextNode.prev = dNode;
        }
        this.size += 1
    }

    printDList() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data)
            curr = curr.next
        }
    }

    //!  DELETION IN LIST

    deletionFromStart() {
        if (!this.head) {
            throw Error("list is empty Can't Delete")
        }
        else if (this.size == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.size -= 1
    }

    deletionFromEnd() {
        if (!this.head) {
            throw Error("List is Empty can't Delete")
        }
        if (this.size === 1) {
            this.deletionFromStart();
        }
        else {
            let secondLast = this.tail.prev;
            secondLast.next = null;
            this.tail.prev = null;
            this.tail = secondLast
        }
        this.size -= 1
    }

    deletionFromKthPosition(k) {
        if (this.size < k) {
            throw Error("Invalid Position")
        } else if (this.size === k) {
            this.deletionFromEnd();
        } else {
            let curr = this.head;
            let count = 1;

            while (count !== k) {
                curr = curr.next;
                count++;
            }

            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
            curr.next = null;
            curr.prev = null;
        }
        this.size -= 1
    }
}

/**
 * TIME COMPLEXITYN OF SINGLY LINKED LIST
  //! INSERTION T.C.
  insertion in front O(1)
  insertion in last O(1)
  insertion in betweeb O(n)

  //! DELETION T.C. 

  deletion in front O(1)
  deletion in last O(n)
  deletion in betweeb O(n)

  //? TIME COMPLEXITYN OF  ARRAY

  //! INSERTION T.C.
  insertion in front O(N)
  insertion in last O(1)
  insertion in betweeb O(n)

  //! DELETION T.C. 

  deletion in front O(N)
  deletion in last O(1)
  deletion in betweeb O(n)

  //*   TIME COMPLEXITYN OF DOUBLY LINKED LIST

   //! INSERTION T.C.
  insertion in front O(1)
  insertion in last O(1)
  insertion in betweeb O(n)

  //! DELETION T.C. 

  deletion in front O(1)
  deletion in last O(1)
  deletion in betweeb O(n)

 */


const dList = new DoublyLinkedList()

dList.insertAtBegginning(9)
dList.insertAtBegginning(6)
dList.insertAtBegginning(4)
dList.insertAtBegginning(2)
dList.insertAtEnd(5)
dList.insertAtEnd(4)
dList.insertAtEnd(6)
dList.insertAtEnd(9)
dList.insertAtEnd(2)
dList.printDList()
console.log("==================")
console.log(dList.size)
console.log("==================")
// dList.insertAtKthPosition(7, 3)
// dList.deletionFromStart()
// dList.deletionFromEnd()
dList.deletionFromKthPosition(2)
dList.printDList()
console.log("==================")
console.log(dList.size)