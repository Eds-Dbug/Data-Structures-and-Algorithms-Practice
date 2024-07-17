/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //Both L and R pointers start at 1
    let l = 1;
    
    for(let r = 1; i < nums.length; r++) {
        //If the right pointer is the same as prev val then set the left as the current value
        if(nums[r] === nums[r-1]){
            nums[l] = nums[r];
            // increment the left
            l++;
        }
    }

    return l;
};

console.log(`Remove Duplicates ${removeDuplicates([1,1,2])}`);
console.log(`Remove Duplicates ${removeDuplicates([0,0,1,1,1,2,2,3,3,4])}`);