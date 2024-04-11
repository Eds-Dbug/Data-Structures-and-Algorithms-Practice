/**
 * 
 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.split(' ').join('').toLocaleLowerCase().replace(/[^a-z-0-9]/g, '');
    console.log(string)
    if(string.length === 1 || string.length === 0){
        return true;
    }
   
    for(let i=0,j=string.length-1;i<string.length, j>=0;i++,j--){
        //console.log(`i is ${i}, j is ${j}`)
        if( i > j ){
            return true;
        }
        if(string.charAt(i) !== string.charAt(j)) {
            return false;
        }
    }
};

//isPalindrome('hello my name is Edgar');
// console.log(isPalindrome('h'));
// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));
console.log(isPalindrome('0P'));