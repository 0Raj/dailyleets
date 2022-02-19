let n=16;
let start=0;
let pow=2**0;
if(n==1){
    return true
}
 console.log(recursiveN(n,start,pow));
function recursiveN(n) {
if(n == 2 ){
    return true;
}
if(n < 1){
    return false;
}
n = n/2;

return recursiveN(n);
}