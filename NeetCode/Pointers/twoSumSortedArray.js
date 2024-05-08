/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let leftPointer = 0;
    let rightPointer = numbers.length -1;
   
    let currentSum = numbers[leftPointer] + numbers[rightPointer];
     console.log(`Current sum is ${currentSum}\n the left:${leftPointer}\n the right ${rightPointer}`)
    while(currentSum != target){
        currentSum = numbers[leftPointer] + numbers[rightPointer];
        
        if(currentSum > target){
            rightPointer --;
        }
        if(currentSum < target){
            leftPointer ++;
        }

        //console.log(`Current sum is ${currentSum}\n the left:${leftPointer}\n the right ${rightPointer}`)
    }
    return[leftPointer +1, rightPointer+1];
};

//console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,4,3],6));
//console.log(twoSum([-1,0],-1))

/**
 * So the idea is that if the target is too big move the right pointer, if too small move the left pointer.
 */