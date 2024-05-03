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

    }

    grow() {
        let newArr = new Array(this.maxCapacity * 2);
        this.maxCapacity *= 2;
        for(let i=0; i < this.currentLength; i++) {
            newArr[i] = this.array[i]
        } 
        this.array = null;
        this.array = newArr;
    }

    shrink() {
        
    }

    getIndex(i) {
        return this.array[i];
    }

    getSize(){
        return this.currentLength;
    }

    getCapacity() {
        return this.maxCapacity;
    }

    print() {
        return `[${this.array.toString()}]`;
    }
}

let arr = new DynamicArr;

arr.addElement(1);
arr.addElement(33);
console.log(arr.getCapacity());
console.log(arr.getSize())
console.log(arr.print())

