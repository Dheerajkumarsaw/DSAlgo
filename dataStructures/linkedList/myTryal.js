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

list.printList()

// console.log(list.size)
// console.log("=====================")
// list.removeElement(10)
// list.removeElement(15)
// list.printList()

// console.log(list.size)
