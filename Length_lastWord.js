var s = "   fly me   to   the monhon  ";
s= s.trim();
var count=0;
for(var i=s.length-1; i>=0; i--) {
    if(s[i] !=" ") {
        count++;
    }
    else if(s[i] ==" "){
        break;
    }
}
console.log(count);