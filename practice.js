function print_val(c,N,bag){
    for(var i=0; i<N; i++) {
        bag = bag+c;
    }
    return bag;
}

var str ="a2b3c2";
var bag="";
for(var i=0; i<str.length; i=i+2) {
    bag = print_val(str[i],Number(str[i+1]),bag);
}
console.log(bag);