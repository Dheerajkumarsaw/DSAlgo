function isBalance(str) {
    let stack = []

    for (let i = 0; i < str.length; i++) {

        if (str[i] == "{" || str[i] == "[" || str[i] == ")") {
            stack.push(str[i])
        }

        if (str[i] == "}") {
            if (str[stack.length - 1] == "{") {
                stack.pop();
            } else {
                return false
            }
        }

        if (str[i] == "]") {
            if (str[stack.length - 1] == "[") {
                stack.pop();
            } else {
                return false
            }
        }

        if (str[i] == ")") {
            if (str[stack.length - 1] == "(") {
                stack.pop();
            } else {
                return false
            }
        }
    }

    return stack.length == 0
}

// console.log(isBalance("[[[[[{{{{((((([{])))))}}}}]]]]]"))

//!  Stack  with  Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        // this.size = 0;
    }

}

class Stack{
    constructor(){
        
    }
}