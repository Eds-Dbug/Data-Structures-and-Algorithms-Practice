class Solution {
    constructor(strs){
        this.encodeResult = "";
        this.decodedResult = [];
        this.strs = strs;
    }
    
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    
    showEncoded() {
        return this.encodeResult
    } 

    showDecoded() {
        return this.decodedResult
    }

    encode() {
        let result = "";
        for(let s of this.strs) {
            result += `${s.length}#${s}`;
        }
        this.encodeResult = result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode() {
        let result = [];
        let i = 0;
        //Loop through the word length
        while (i < this.encodeResult.length){
            //j is the end index where i is the begining index.
            let j = i;
            //move the end index to find the number
            while (this.encodeResult[j] !== '#') {
                j++;
            }
            let length = parseInt(this.encodeResult.substring(i,j),10)
            //move j up by 1
            j ++;
            //j + 1 only returns a value does not change a state
            i = j;
            j = i + length;
            result.push(this.encodeResult.substring(i,j))
            i = j
        }
        this.decodedResult = result;
    }
}

let solution1 = new Solution(["neet","code","love","you"]);

solution1.encode()
console.log(solution1.showEncoded())
solution1.decode()
console.log(solution1.showDecoded())