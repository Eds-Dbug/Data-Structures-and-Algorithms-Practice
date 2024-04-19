/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const complements = {};

    for (let i = 0; i < nums.length; i++) {
        let number = nums[i];
        let complement = target - number;

        // Correctly check if the complement exists in the object
        if (complements[complement] !== undefined) {
            return [complements[complement], i];
        }
        // Store the index of the current number
        complements[number] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
