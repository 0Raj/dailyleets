let arr = [1,2,3,4,15,15,16,17,8,9];
function recursiveArr (arr){
    if(arr.length == 1) {
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let arr1 = arr.slice(0,mid);
    let leftArr = recursiveArr(arr1);
    let arr2 = arr.slice(mid,arr.length);
    let rightArr = recursiveArr(arr2);
    
     return mergeArr(leftArr,rightArr);
}
function mergeArr(arr1,arr2){
    let i = 0;
    let j = 0;
    let k = [];

    while (i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]) {
            k.push(arr1[i]);
            i++;
        }
        else {
            k.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        k.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        k.push(arr2[j]);
        j++;
    }

    return k;
    
}
function createArr(arr,start,end){
    let arr1=[];
    for(let i=start; i<=end; i++){
        arr1.push(arr[i]);
    }
    return arr1;
}


let res = recursiveArr(arr);
console.log(res);