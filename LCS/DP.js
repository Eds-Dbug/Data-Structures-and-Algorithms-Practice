function LCS(A,B,i,j,dp) {
  if(i === 0 || j === 0) {
    return 0;
  }
  //if the letters are the same than go to next letter
  if(A[i-1] === B[j-1]) {
    return dp[i][j] = 1 + LCS(A,B,i-1,j-1,dp);
  }
  //if the entry in the array is empty than put it in.
  if(dp[i][j] != -1) {
    return dp[i][j];
  }

  //Now check if the letters arent the same
  return dp[i][j] = Math.max(LCS(A,B,i-1,j,dp) , LCS(A,B,i,j-1,dp));
}

//driver code
let X = "AGGTAB";
let Y = "GXTXAYB";
 
let m = X.length;
let n = Y.length;
let dp = new Array(m + 1);

for(let i = 0; i < m + 1; i++)
{
    //algorith returns 0 so you have to fill with -1
    dp[i] = new Array(n + 1).fill(-1);
}

console.log(LCS(X,Y,m,n,dp))