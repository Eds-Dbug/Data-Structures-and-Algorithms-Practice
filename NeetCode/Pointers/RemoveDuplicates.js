/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //Both L and R pointers start at 1
    let l = 1;
    
    for(let r = 1; r < nums.length; r++) {
        //If the right pointer is the same keep going else if it isnt than you make the left equal the right
        if(nums[r-1] != nums[r]){
            nums[l] = nums[r];
            // increment the left
            l++;
        }
    }

    return [l,nums.slice(0,l)];
};

const [left, array] = removeDuplicates([1,1,2])
const [left1, array1] = removeDuplicates([0,0,1,1,1,2,2,3,3,4]
)
console.log(`${left} duplicates and [${array}]`);
console.log(`${left1} duplicates and [${array1}]`);