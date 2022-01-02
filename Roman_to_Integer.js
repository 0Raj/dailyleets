var s="MDX"
var roman_obj = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}
 var sum = 0;
for(var i=0; i<s.length; i++) {
    var temp = 0;
    if(roman_obj[s[i+1]] > roman_obj[s[i]]) {
        temp = roman_obj[s[i+1]] - roman_obj[s[i]];
        sum = sum+temp;
        i++;
    }
    else {
        sum = sum+roman_obj[s[i]]
    }
}
  console.log(sum);