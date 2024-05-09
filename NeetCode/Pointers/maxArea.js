/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0; 

    while (left < right) {
        let currentWidth = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let currentArea = currentHeight * currentWidth;
        maxArea = Math.max(maxArea, currentArea); 

        if (currentArea > maxArea) {  
            maxArea = currentArea; 
        }

        if (height[left] < height[right]) {
            left++;
        }else {
            right--;
        }
    }

    return maxArea;
};

// Driver code
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Test with provided data
console.log(maxArea([1,1])); // Test with minimum data
console.log(maxArea([1,2,1])); // Test with increasing-decreasing pattern