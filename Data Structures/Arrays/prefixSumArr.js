const prefixSums = (arr,n) => {
    let prefixArr = new Array(n);
    //initialize the first element
    prefixArr[0] = arr[0];
    for(let i=1; i<n; i++){
        prefixArr[i] = prefixArr[i-1] + arr[i];
    }
    return prefixArr;
}

//driver

let arr = [ 10, 4, 16, 20 ];
let n = arr.length;
console.log(prefixSums(arr,n));
