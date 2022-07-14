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
        }
        this.size++;
    }

    print() {
        while (this.head) {
            console.log(this.head.data);
            this.head = this.head.next
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
        if(!this.head){
            return
        }
        let curr = this.head
        let prev = null
        let nextNode = null
        let count = 0

        while (count < k && curr){
            nextNode = curr.next
            curr.next =prev
            prev = curr
            curr = nextNode
            count++
        }
        
        
    }

    isLoop(){
        let set  = new Set();

        while(this.head){

            if(set.has(this.head.data)){
                return true
            }else{
                set.add(this.head.data)
            }
        }
        return false
    }
}

let list = new LinkedList();

list.addfront(5)
list.addfront(555)
list.addfront(50)
list.addfront(88)
list.addfront(2)
list.addfront(500)
list.addfront(100)

list.print()
console.log(list.size)
console.log(list.isLoop())