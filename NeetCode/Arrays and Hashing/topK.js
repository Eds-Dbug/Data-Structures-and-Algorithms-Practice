/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = {};

    for(let i=0;i<nums.length;i++) {
        if(freq[nums[i]]) {
            freq[nums[i]] += 1;
        }else {
            freq[nums[i]] = 1;
        }
    }

    const sort = Object.entries(freq).sort( (a,b) =>  b[1] - a[1]).slice(0,k).map((subarray) => Number(subarray[0]));

    return sort;
};

console.log(topKFrequent([1,1,1,2,2,3], 2))