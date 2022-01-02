function min_of (val1,val2) {
    if(val1<val2) {
        return val1;
    } 
    else if(val2<val1) {
        return val2;
    }
    else {
        return val1;
    }
}
var s = "00110011";
var indx = 0, res=0,ans=0, arr=[];
arr[0] = 1;
for(var i=1; i<s.length; i++) {
    if(s[i-1] == s[i]) {
        arr[indx] += 1; 
    }
    else {
        indx++;
        arr[indx] = 1;
    }
}
for(var j=1; j<arr.length; j++) {
    res = min_of(arr[j-1], arr[j]);
    ans += res;
}
console.log(ans);