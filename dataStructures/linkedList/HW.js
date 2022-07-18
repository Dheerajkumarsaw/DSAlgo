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

    addEle(data) {

        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node
        } else {
            this.tail.next = node;
            this.tail = node
        }
        this.size++;
    }

    print() {
        let curr = this.head
        while (curr) {
            console.log(curr.data);
            curr = curr.next
        }
    }

    addfront(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
        // thi
    }

    sizeRev(k) {
        // let list = new LinkedList()
        if (!this.head) {
            return
        }
        let curr = this.head
        let prev = null
        let nextNode = null
        let count = 0

        while (count < k && curr) {
            nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
            count++
        }


    }

    isLoop() {
        let set = new Set();

        while (this.head) {

            if (set.has(this.head.data)) {
                return true
            } else {
                set.add(this.head.data)
            }
        }
        return false
    }
    findKthPosotionformlast(k) {
        let slow = this.head
        let fast = this.head
        // console.log(fast.next.next)
        while (k != 0 && fast) {
            fast = fast.next
            k--
        }
        // console.log(fast)
        while (fast) {
            fast = fast.next
            slow = slow.next
        }
        console.log(slow)
        
    }
}

let list = new LinkedList();

list.addEle(5)
list.addEle(555)
list.addEle(50)
list.addEle(88)
list.addEle(2)
list.addEle(500)
list.addEle(100)

list.print()
list.findKthPosotionformlast(5)
// console.log(list.size)
// console.log(list.isLoop())