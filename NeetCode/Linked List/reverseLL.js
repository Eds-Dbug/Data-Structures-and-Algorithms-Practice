const reverseLL = (head) =>{
    let new_list = null;
    let current = head;

    while(current) {
        let nextNode = current.next; //save the next node;
        current.next = new_list;
        new_list = current;
        current = nextNode;
    }

   return new_list;
}
class Node {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}

let n5 = new Node(5)
let n4 = new Node(4,n5)
let n3 = new Node(3,n4)
let n2 = new Node(2,n3)
let n1 = new Node(1,n2)

let new_list = reverseLL(n1);
while(new_list){
    console.log(new_list.data);
    new_list = new_list.next;
}