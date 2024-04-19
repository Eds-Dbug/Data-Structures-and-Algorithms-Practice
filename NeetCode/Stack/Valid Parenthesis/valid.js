`
20. Valid Parentheses
Easy
Topics
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 `

 const valid = (string) => {
    let stack = [];

    for(let bracket of string){
        if(bracket === '[' || bracket === '(' || bracket === '{') {
            stack.push(bracket);
        } else {
            if(stack.length === 0) {
                //stack is empty
                return false;
            }

            let top = stack.pop();
            if(bracket === ']' && top !== '[' || bracket === ')' && top !== '(' || bracket === '}' && top !== '{' ){
                return false;
            }
        }
    }

    return stack.length === 0;
 }
 console.log(valid('({)['));
 console.log(valid('()'));
 console.log(valid("()[]{}"))
