class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addElement(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            // this.tail = node;
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
            node.prev = curr;
            //     this.tail.next = node
            //     node.prev = this.tail
            //     this.tail = node;
            }
        }
        print() {
            let temp = this.head
            while (temp) {
                console.log(temp.data)
                temp = temp.next
            }
        }
    }

let list = new DoublyLinkedList();

list.addElement(1)
list.addElement(2)
list.addElement(3)
list.addElement(4)
list.addElement(5)
list.addElement(6)
list.addElement(7)
list.addElement(8)
list.addElement(9)

list.print()

console.log(list)