var nums = [0,1,2,2,3,0,4,2], val = 2;
var start = 0, end = nums.length-1, temp=0;
if(nums.length == 0) {
    return 0;
}
if(nums.length == 1 && nums[0] == val) {
    return 0;
}
else if (nums.length == 1 && nums[0] != val){
    return 1;
}
var count=0; 
for(var i=0; i<nums.length; i++) {
    if(nums[i] == val) {
        count++;
    }
}

while(start<end) {
    if(nums[start]==val && nums[end]!=val) {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    else if(nums[start]==val && nums[end]==val) {
        end--;
    }
    else {
        start++;
    }
}
console.log(nums);