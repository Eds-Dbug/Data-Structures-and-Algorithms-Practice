

function binarySearch(arr, low, high, s) {

  let mid = Math.floor((low + high) / 2);

  if(low > high) {
    return 'not here';
  }

  if(arr[mid] == '') {
    let left = mid -1 ;
    let right = mid + 1;

    while(true) {
      if(left < low && right > high) {
        return 'not here neither';
      }
      if(left >= low && arr[left] != "") {
        mid = left;
        break;
      }
      if(right <= high && arr[right] != "") {
        mid = right;
        break;
      }
      left --;
      right ++;
    }
  }
  
  if(arr[mid] == s) {
    return mid;
  } else if(arr[mid] < s ) {
    return binarySearch(arr,low ,mid -1, s);
  } else {
    return binarySearch(arr, mid + 1 ,high, s);
  }

  //console.log('mid', mid)

  //console.log(sorted);
}

let arr = ["for", "geeks", "", "", "", "", "ide", "practice", "", "", "", "quiz"];

console.log(binarySearch(arr, 0, arr.length , "practice"));