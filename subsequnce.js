function printArr(bag){
    let res="";
    for(let i=0; i<bag.length; i++) {
        res = res+bag[i];
    }
    console.log(res);
}

function print_result(n,arr,ind,temp){
    if(temp.length != 0) {
        printArr(temp);
    }
    if(temp.length == n){
        return;
    }
    
    for(let i=ind; i<n; i++) {
        temp.push(arr[i]);
        print_result(n,arr,i+1,temp);
        temp.pop();
    }

}

let arr = ["a","b","c"];
let n = arr.length;
let ind=0;
let temp=[];
print_result(n,arr,ind,temp);
