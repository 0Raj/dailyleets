var x = 121;
var bag=0, digit=0,num=x;
while(num>0) {
    digit = num%10;
    bag = (bag*10)+digit;
    num = Math.floor(num/10);
}
if(bag === x) {
    console.log(true);
}
else {
    console.log(false);
}