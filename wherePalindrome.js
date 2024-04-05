

/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
	// Write your code here
	//have to go through each char anyways
	let modified = s;
  let result = [];
	for (let i = 0; i < s.length; i++) {
		modified = s.slice(0, i) + s.slice(i + 1);
    let index = i;
    //console.log(modified)
		if(palindrome(modified)) {
      result.push(i)
    }
   
	}
 
  return result;

  function palindrome(s) {
    for (let i = 0; i < s.length / 2; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false;
      }
      return true;
    }
  }
  
}
//console.log(palindrome('aab'))
console.log(palindromeIndex('aaaba')) 

