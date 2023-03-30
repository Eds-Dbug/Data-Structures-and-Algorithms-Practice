/**
 * Characteristics of Queues:
 * - Is FIFO 
 * - Queue can handle multiple data.
 * - We can access both ends.
 * - They are fast and flexible. They are fast and flexible.
 * - Has a Front, and back and the data (like an array) 
 * Representation:
 * - Can use arrays or lists
 */

class ArrayQueue {
  constructor(){
    this.data = [];
  }

  enqueue(val) {
    this.data.push(val);
  }

  dequeue() {
    this.data.shift();
  }

  show() {
    console.log(this.data);
  }
}

const myQueue = new ArrayQueue();

for(let i = 0; i < 10; i++) {
  myQueue.enqueue(i);
}

for (let i = 0; i < 7; i++) {
	myQueue.dequeue();
}

myQueue.show();