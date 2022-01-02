var nums = [2,7,11,15];
var target=9;
var res = [];
    for(var i=0; i<nums.length; i++) {
        for(var j=i+1; j<nums.length; j++) {
            var sum = nums[i]+nums[j];
            if(sum === target) {
                res.push(i);
                res.push(j);
             }   
        }
        if(res.length === 2) {
            break;
        }
    }
    console.log(res);
    