/**
 * Why LL instead of array? 
 * - Size of array is fixed: size is equal to upper limit
 * - insertion and deletion in array is expensive as room
 *  has to made to accomadate new element and all elements
 *  have to be shifted over vs LL where we can go to a node 
 *  and insert at desired position
 * 
 * Pros vs Cons of LL:
 * Pros:
 * - It acts as a Dynamic Array aka auto resizing array.
 * - Ease of Insertion/Deletion
 * - Insertion at the beginning is a constant time operation
 *  and takes O(1) time, as compared to arrays where inserting
 *  an element at the beginning takes O(n) time,where n is the
 *  number of elements in the array.
 * Cons: 
 * - Random access is not allowed. We have to access elements
 *  sequentially starting from the first node(head node). So
 *  we cannot do a binary search with linked lists efficiently
 *  with its default implementation. 
 * - Extra memory space for a pointer is required with each
 *  element of the list (Not that bad IMO). 
 * - Not cache-friendly. Since array elements are in contiguous
 *  locations, there is the locality of reference which is not
 *  there in the case of linked lists.
 * - It takes a lot of time in traversing and changing the pointers.
 * - Reverse traversing is not possible in singly linked lists.
 * - It will be confusing when we work with pointers.
 * - Direct access to an element is not possible in a linked list
 *  as in an array by index.
 * - Searching for an element is costly and requires O(n) time
 *  complexity vs array which can access an index O(1).
 * - Sorting of linked lists is very complex and costly.
 * - Appending an element to a linked list is a costly operation,
 *  and takes O(n) time, where n is the number of elements in the
 *  linked list, as compared to arrays that take O(1) time.
 * 
 * Basic Operations of LL
 * - Insert
 * - Delete
 * - Search
 * - Display
 */

/**
 * Singly LL
 * Characteristics:
 * - Each node holds a single value and a reference to the next
 *  node in the list.
 * - The list has a head, which is a reference to the first node
 *  in the list, and a tail, which is a reference to the last node
 *  in the list.The list has a head, which is a reference to the
 *  first node in the list, and a tail, which is a reference to
 *  the last node in the list.
 * - The nodes are not stored in a contiguous block of memory,
 *  but instead, each node holds the address of the next node in
 *  the list.
 * - Accessing elements in a singly linked list requires traversing
 *  the list from the head to the desired node, as there is no direct
 *  access to a specific node in memory.
 * Applications:
 * Memory management:
 * -  Singly linked lists can be used to implement memory pools,
 *  in which memory is allocated and deallocated as needed.
 * Database Indexing:
 * - Singly linked lists can be used to implement linked lists
 *  in databases, allowing for fast insertion and deletion
 *  operations.
 * Represeing polynomials and sparse matrices:
 * - Singly linked lists can be used to efficiently represent
 *  polynomials and sparse matrices, where most elements are zero.
 * Singly linked lists can be used to efficiently represent
 *  polynomials and sparse matrices, where most elements are zero.
 * Operating Systems:
 * - : Singly linked lists are used in operating systems for tasks
 *  such as scheduling processes and managing system resources.
 * 
 * Advantages of SLL:
 * Dynamic memory allocation: 
 * - Singly linked lists allow for dynamic memory allocation,
 *  meaning that the size of the list can change at runtime as
 *  elements are added or removed. 
 * Cache feindliness:
 * - Singly linked lists can be cache-friendly as nodes can be
 *  stored in separate cache lines, reducing cache misses and
 *  improving performance.
 * Space effiecient:
 * - Singly linked lists are space-efficient, as they only need to
 *  store a reference to the next node in each element, rather than
 *  a large block of contiguous memory.
 * 
 * Disadvantages of SLL: 
 * Poor random access:
 * - Accessing an element in a singly linked list requires
 *  traversing the list from the head to the desired node, making
 *  it slow for random access operations compared to arrays.
 * Increased memory ovverhead:
 * - Singly linked lists require additional memory for storing the
 *  pointers to the next node in each element, resulting in
 *  increased memory overhead compared to arrays.
 * Vunerable to data loss:
 * - Singly linked lists are vulnerable to data loss if a node’s
 *  next pointer is lost or corrupted, as there is no way to
 *  traverse the list and access other elements. (break the chain)
 * Not good for parallel processing:
 * - Singly linked lists are not suitable for parallel processing,
 *  as updating a node requires exclusive access to its next
 *  pointer, which cannot be easily done in a parallel environment.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(val) {
    let temp = new Node(val);
    if(!this.head) {
      this.head = temp;
      this.tail = temp;
      this.size ++;
    }else {

    }
  }

  delete() {

  }

  search(val) {
    let temp = this.head;
    if(!this.head) {
      return "List is empty"
    }
    if(!temp) {
      return `the value ${val} is not in the list`;
    }
    while(temp) {
      if(temp.val === val) {
        return `the value ${val} is in the list`;
      }
      temp = temp.next;
    }
  }

  Display() {}
  
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

let head = node1;
node1.next = node2;
node2.next = node3;

function printList() {
  let temp = head;
  let result = '';
  if(!temp) {
    return;
  }
  while(temp) {
    result += `Node #: ${temp.val} \n`;
    temp = temp.next;
  }
  return result
}

function search(val) {
    let temp = head;

    while(temp) {
      if(temp.val === val) {
        return `the value ${val} is in the list`;
      }
      if(temp.next === null) {
        return `the value ${val} is not in the list`
      }
      temp = temp.next;
    }
  }

function insert(val) {
  let iterate = head;
  let next = iterate.next;
  const newNode = new Node(val);
  if(!head) {
    head = newNode;
  }
  while (iterate) {
		//console.log(`what is temp?: ${iterate.val}`);
    if(!iterate.next) {
      iterate.next = newNode;
      return;
    }
		if (iterate.val === val || val < next.val) {
			iterate.next = newNode;
      newNode.next = next;
			return;
		}

		iterate = iterate.next;
	}
}

function del(val) {
  let iterate = head;
  
  while (iterate) {
    if(val === iterate.next.val) {
      let temp = iterate.next;
      iterate.next = iterate.next.next;
      temp.next = null;
      return
    }
    iterate = iterate.next;
  }
};

insert(4);
insert(1.5)
insert(4);
del(2)
console.log(printList())
//console.log(search(1))

