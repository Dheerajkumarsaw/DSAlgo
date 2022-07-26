
// linked list based implementation

class Node{

    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    appendElement(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
        
    }

    removeElement(){
        if(this.size===0){
            throw Error("Queue is empty");
        }
        let curr = this.head;
        this.head = curr.next;
        curr.next = null;
        this.size--;
        return curr.data;

    }

}


class Queue{

    constructor(){
        this.list = new LinkedList();
    }

    enQueue(data){
        // adding element in a queue;
        this.list.appendElement(data);
    }

    deQueue(){
        // adding element in a queue;
        return this.list.removeElement();
    }

    get getSize(){

        return this.list.size;
    }

    frontElement(){
        return this.list.head.data;
    }

    isEmpty(){
        return this.list.size ===0;
    }
}


module.exports = Queue