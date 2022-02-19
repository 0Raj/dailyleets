let arr = [5,3,8,1,9];
let low = 0;
let hi = arr.length-1;
quickSort(arr,low,hi);
console.log(arr);
function quickSort(arr,low,hi){
    if(low>=hi){
        return;
    }
    let s = low;
    let e = hi;
    let mid = s+(e-s)/2;
    let pivot = arr[mid];

    while(s<=e) {
        while(arr[s] < pivot) {
            s++;
        }
        while(arr[e] > pivot) {
            e--;
        }
        if(s<=e){
            let temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }
    } 
    quickSort(arr,s,hi);
    quickSort(arr,low,e);
}