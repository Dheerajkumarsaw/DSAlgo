//! Singly Linked List

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
    }


    addElement(data) {
        let node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {
            let curr = this.head

            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node
        }
        this.size++
    }

    printList() {
        if (this.size == 0) {
            throw Error("List is Empty")
        }
        let curr = this.head;

        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    removeElement(data) {
        let curr = this.head;
        let prev = null;

        if (curr.data === data) {
            this.head = curr.next;
            curr.next = null;
        }
        else {
            curr = curr.next
            while (curr) {
                if (curr.data == data) {
                    if (prev == null) {
                        this.head = curr.next
                        curr.next = null
                    } else {
                        prev.next = curr.next
                    }
                }
                prev = curr
                curr = curr.next
            }
        }
        this.size--
    }

    insertAtFirst(data) {
        let node = new Node(data);

        node.next = this.head
        this.head = node;
        this.size++
    }
    // 1 => 2 => 3 => 4 => 5 => 6 => 7 => 8 => 9 => 10
    // 10 => 9 => 8 => 7 => 6 => 5 => 4 => => 3 => 2 => 1

    // reverse() {
    //     let curr = this.head
    //     let prev = null

    //     let nextNode = curr.next
    //     while (curr) {
    //         this.head.next = prev
    //         prev = this.head
    //         this.head = nextNode
    //         curr = curr.next
    //     }
    //     this.head = nextNode
    // }

    insertAtKthPosition(data, k) {
        let node = new Node(data)
        if (k == 0) {
            node.next = this.head;
            this.head = node
        } else {
            let curr = this.head, prev
            let count = 0
            while (count < k) {
                prev = curr
                curr = curr.next
                count++
            }
            prev.next = node;
            node.next = curr;
        }
        this.size++
    }

    reverse() {
        let curr = this.head;
        let prev = null;
        let nextNode = null;

        while (curr) {
            nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode
        }
        this.head = prev
    }
    findKthPosotionformlast(k) {
        let slow = this.head
        let fast = this.head
        // console.log(fast.next.next)
        while (k != 0 && fast) {
            fast = fast.next
            k--
        }
        //!  Error handle
        if (fast == null && k != 0) {
            console.log("Size Exceded")
            return
        }
        // console.log(fast)
        while (fast) {
            fast = fast.next
            slow = slow.next
        }
        console.log(slow)
    }

    findMidOfList() {
        let slow = this.head
        let fast = this.head
        while (fast.next && fast.next.next) {
            fast = fast.next.next
            slow = slow.next
        }
        if (fast.next) {
            return slow.next
        }
        return slow
    }
}

let list = new LinkedList();

list.addElement(10)
list.addElement(17)
list.addElement(14)
list.addElement(19)
list.insertAtFirst(18)
list.insertAtFirst(15)
list.insertAtFirst(16)
list.insertAtFirst(5)
list.insertAtFirst(6)
list.insertAtFirst(8)

// list.findKthPosotionformlast(8)
console.log(list.findMidOfList())

list.printList()
// console.log("=====================")
// list.insertAtKthPosition(100, 5)
// list.printList()
// console.log("=====================")
// list.reverse()
// list.printList()
// console.log("=====================")
// list.insertAtKthPosition(500, 5)
// list.printList()
// console.log(list.size)
// console.log("=====================")
// list.removeElement(10)
// list.removeElement(15)
// list.printList()

// console.log(list.size)
