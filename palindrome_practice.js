//abcba
var str = "racecarwe";
var start =0,end=str.length-1,flag=true;
while(start<end) {
    if(str[start] == str[end]) {
        start++;
        end--;
    }else {
        flag = false;
        break;
    }
}
if(flag) {
    console.log("It is palindrome");
}
else {
    console.log("It is Not palindrome");
}
