//Iterative approach
function subSeq(str1, str2) {
  let m = str1.length, n = str2.length;
  //pointers
  let i = 0, j=0;
  while(i < m && j < n) {
    if(str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  //check if we have seen each letter in str
  return i === m 
}

//recursive approach
function subSeq1(str1, str2, m, n) {
  //base cases
  if(m === 0) {
    return true;
  }
  if(n === 0) {
    return false;
  }
  //if last 2 chars are same recurse
  if(str1[m-1] === str2[n-1]) {
    return subSeq1(str1, str2, m-1, n-1);
  }
    return subSeq1(str1, str2, m, n - 1);
}

let s1 = 'geeksforgeek';
let s2 = 'geeksforgeeks';

//console.log(subSeq(s1,s2));
console.log(subSeq1(s1, s2, s1.length, s2.length));