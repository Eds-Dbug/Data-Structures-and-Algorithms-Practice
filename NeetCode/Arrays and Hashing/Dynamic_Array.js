class Dynamic_Array {
    constructor() {
        this.capacity = 2;
        this.length = 0;
        this.arr = new Array(this.capacity)
    }

    push(n) {
        //Check if array is full
        if(this.length == this.capacity) {
           this.resize()
        }
        this.arr[this.length] = n;
        this.length ++;
    }

    resize() {
        this.capacity *= 2;
        let newArr = new Array(this.capacity);
        //copy all elements over
        for(let i = 0; i < this.length; i++){
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    pop() {
        if(this.length > 0){
            this.length --;
        }
    }

    get(i) {
        if(i < this.length) {
            return this.arr[i];
        }
        //for out of bounds
        return;
    }

    insert(i,n) {
        if(i < this.length) {
            this.arr[i] = n;
        }
        return;
    }

    print() {
        console.log(` Array: ${this.arr}\n Capacity: ${this.capacity}\n Length: ${this.length}`)
    }
}

let myArr = new Dynamic_Array();

for(let i = 0; i < 6; i++) {
    myArr.push(i)
}

myArr.print()
myArr.pop();
myArr.print()
myArr.get(1);
myArr.print()
myArr.insert(4,89)
myArr.print()
