function max(a,b) {
  return (a>b) ? a:b;
}

function LCS(A,B,i,j) {
  if(i === 0 || j === 0) {
    return 0;
  }
  //if the letters are the same than go to next letter
  if(A[i-1] === B[j-1]) {
    return 1 + LCS(A,B,i-1,j-1);
  }
  //Now check if the letters arent the same
  return Math.max(LCS(A,B,i-1,j) , LCS(A,B,i,j-1));
}

function LCS2(A,B,i,j) {
  if(i === A.length || j === B.length) {
    return 0;
  }
  //if the letters are the same than go to next letter
  if(A[i] === B[j]) {
    return 1 + LCS2(A,B,i+1,j+1);
  }
  //Now check if the letters arent the same
  return Math.max(LCS2(A,B,i+1,j) , LCS2(A,B,i,j+1));
}

let A = 'AGTBB';
let B = 'GTXAB';

console.log(LCS2(A,B,0,0));

