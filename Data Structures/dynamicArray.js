class DynamicArr {
    constructor() {
        this.currentLength = 0;
        this.maxCapacity = 1;
        this.array = new Array(this.maxCapacity);
    }

    addElement() {
        if(this.currentLength == this.maxCapacity) {
            this.resize();
        }

    }

    deleteElement() {

    }

    resize() {
        let newArr = new Array(this.maxCapacity * 2);
        this.maxCapacity *= 2;
        for(let i=0; i < this.currentLength; i++) {
            newArr[i] = this.array[i]
        } 
        this.array = null;
        this.array = newArr;
    }

    getIndex(i) {

    }
}