class Node {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}

class LL {
    constructor(head){
        this.head = head;
    }

    size(){
        let count = 0;
        let node = this.head;
        while(node) {
            count ++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let node = this.head;
        while(node) {
            node = node.next;
        }
        return node.data;
    }

    getFirst() {
        let node = this.head;
        if(node) {
            return node;
        }
    }

    print() {
        let node = this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }
    }
}

let n5 = new Node(5)
let n4 = new Node(4,n5)
let n3 = new Node(3,n4)
let n2 = new Node(2,n3)
let n1 = new Node(1,n2)

let list = new LL(n1);

console.log(list.print()) //returns 5

