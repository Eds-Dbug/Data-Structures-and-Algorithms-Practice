/**
 * Steps:
 * After rotating d positions to the left, the first d elements become the last d elements of the array
 * 1. First store the elements from index d to N-1 into the temp array.
 * 2.Then store the first d elements of the original array into the temp array.
 * 3. Copy back the elements of the temp array into the original array.
 *
 * Illustration:
 * 
 * Suppose the give array is arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2.

First Step:
    => Store the elements from 2nd index to the last.
    => temp[] = [3, 4, 5, 6, 7]

Second Step: 
    => Now store the first 2 elements into the temp[] array.
    => temp[] = [3, 4, 5, 6, 7, 1, 2]

Third Steps:
    => Copy the elements of the temp[] array into the original array.
    => arr[] = temp[] So arr[] = [3, 4, 5, 6, 7, 1, 2]
 * 
 */

// function rotateArr(arr, positions) {
//   let temp = arr.slice(positions);
//   let temp2 = arr.slice(0,positions);
//   arr = temp.concat(temp2)
//   return arr;
// }
function rotateArr(a,d) {
  let temp = [];//Temporary array created
  for(let i = 0; i < d; i++)//Stores elements that have vulnerable positions into a temporary array
  {
      temp[i] = a[i];
  }
  for(let i = 0; i < a.length-d; i++)//Moves the elements in the existing array over
  {
      a[i]= a[d+i];//Stores all values not stored in temp to positions at the front of the array, not ecessarily filling in the entire array
  }
  for(let i = 0; i < d; i++)//inserts values of temp array back into main array
  {
      a[a.length-d+i] = temp[i]; //Counts from the stopping place of the index of the previous for loop
  }
  return a;
}



let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(rotateArr(arr,6));
