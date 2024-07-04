class Solution {
    constructor(strs){
        this.encodeResult = "";
        this.strs = strs;
    }
    
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    
    encode() {
        let result = "";
        for(let s of this.strs) {
            result += `${s.length}#${s}`;
        }
        this.encodeResult = result;
    }

    showEncoded() {
        return this.encodeResult
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        
    }
}

let solution1 = new Solution(["neet","code","love","you"]);

solution1.encode()
console.log(solution1.showEncoded())