class DynamicArr {
    constructor() {
        this.currentLength = 0;
        this.maxCapacity = 1;
        this.array = new Array(this.maxCapacity);
    }

    addElement(element) {
        if(this.currentLength == this.maxCapacity) {
            this.grow();
        }
        this.array[this.currentLength++] = element;
    }

    pop() {
        // Make last entry a 0 
        this.array[this.currentLength -1] = 0;
        this.currentLength --;
        //reduce the size
        if(this.currentLength == Math.floor(this.maxCapacity/2)){
            this.shrink();
        }

    }

    grow() {
        let newArr = new Array(this.maxCapacity * 2);
        this.maxCapacity *= 2;
        for(let i=0; i < this.currentLength; i++) {
            newArr[i] = this.array[i]
        } 
     
        this.array = newArr;
    }

    shrink() {
        let newArr = new Array(this.maxCapacity/2);
        this.maxCapacity /= 2;
        for(let i=0; i < this.currentLength; i++) {
            newArr[i] = this.array[i]
        }
        
        this.array = newArr;
    }

    getIndex(i) {
        return this.array[i];
    }

    getSize(){
        return `Current length is: ${this.currentLength}`;
    }

    getCapacity() {
        return `Max capacity is: ${this.maxCapacity}`;
    }

    print() {
        return `[${this.array.toString()}]`;
    }
}

let arr = new DynamicArr;

for(let i=0; i<9;i++){
    arr.addElement(i);
}
for(let i=0;i<3;i++){
    arr.pop();
}
//arr.addElement(55);
console.log(arr.getCapacity());
console.log(arr.getSize())
console.log(arr.print())


