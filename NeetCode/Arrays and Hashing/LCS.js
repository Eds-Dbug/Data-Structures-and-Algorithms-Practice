/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    const freq = [];
    // for uniqueness
    let sorted = [...new Set(nums.sort((a,b) => a-b))];
    let seq = [];

    for(let num of sorted){
        // get last element of seq
        
        if(seq.length ===0 || num - seq[seq.length -1] === 1 ){
            seq.push(num); 
        }
        else {
            freq.push(seq.length);
            seq = [];
        }
    }
    
    if (seq.length > 0) freq.push(seq.length); // Push the last sequence

    return freq.sort((a,b) => b-a)[0];
};

console.log(longestConsecutive([1,2,0,1,5,6]))