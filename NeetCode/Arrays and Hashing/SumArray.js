function productExceptSelf(nums) {
    const result = [];
    let prefix = 1;
    let postfix = 1;
    
    // First pass to collect products of all elements before the current one
    for (let i = 0; i < nums.length; i++) {
        //saves the result index location
        result[i] = prefix;
        prefix *= nums[i];
        console.log(`Step 1 - Index ${i}: prefix=${prefix}, result=[${result.join(', ')}]`);
    }
    
    // Second pass to collect products of all elements after the current one
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
        console.log(`Step 2 - Index ${i}: postfix=${postfix}, result=[${result.join(', ')}]`);
    }
    
    return result;
};

console.log(productExceptSelf([1,2,3,4]))

