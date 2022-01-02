
var s="([{}])";

var a=[];
for(var i=0; i<s.length; i++) {
    if(s[i] == "(" || s[i] == "["|| s[i] == "{") {
        a.push(s[i]);
    }
    else if(s[i] == ")" && a.length !=0 && a[a.length-1] == "(") {
        a.pop();
    }
    else if(s[i] == "}" && a.length !=0 && a[a.length-1] == "{") {
        a.pop();
    }
    else if(s[i] == "]" && a.length !=0 && a[a.length-1] == "[") {
        a.pop();
    }
    else if(s[i] == ")" || s[i] == "]"|| s[i] == "}") {
        a.push(s[i]);
    }                                            
}
if(a.length == 0) {
    console.log(true);
}
else {
    console.log(false);
}
