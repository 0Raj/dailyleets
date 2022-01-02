var nums = [1,1,2];
if(nums.length==0 ) {
    return 0;
}
if(nums.length==1) {
    return 1;
}
var i=0,temp=0,j=1,arr=[];
arr.push(nums[0]);
while( j<nums.length) {
if(nums[i] == nums[j]) {
i++;
j++;
}
else {
arr.push(nums[j]);
i++;
j++;
}
}
for(var k=0; k<arr.length; k++) {
nums[k] = arr[k];
}
console.log(arr);