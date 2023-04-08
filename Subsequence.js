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
  
}

let s1 = 'geeksforgeekss';
let s2 = 'geeksforgeeks';

console.log(subSeq(s1,s2));