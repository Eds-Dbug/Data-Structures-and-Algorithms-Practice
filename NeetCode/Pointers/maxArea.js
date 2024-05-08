/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length -1;

    let max = height[left]*height[right];

    while(height[left++] > height[left] || height[right--] > height[right]){
        max = height[left] * height[right]
    }

    return max;
};

//driver code
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));