function arrange(arr) {
    var s1=0,s2=1;
    while(s2<arr.length) {
        if(arr[s1] > arr[s2]) {
            temp = arr[s2];
            arr[s2] = arr[s1];
            arr[s1] = temp;
            s1--;
            s2--;
            if(s2 == 0) {
                s1=0;
                s2=1;
            }
        }
        else if(arr[s1] < arr[s2] || arr[s1] == arr[s2]){
            s1++;
            s2++;
        }
    }
    return arr;
}

var nums1 = [4,5,6,0,0,0], nums2 = [1,2,3];
var start=0,end=0,max_arr=0,countZero=0,min_arr=0;
if(nums1.length > nums2.length) {
    end = nums1.length-1;
    max_arr = nums1;
    min_arr = nums2;
}
else if(nums1.length < nums2.length){
    end = nums2.length-1;
    max_arr = nums2;
    min_arr = nums1;
}
else if(nums1.length == nums2.length) {
    for(var i=0; i<nums1.length; i++) {
        nums1.pop;
    }
    for(var j=0; j<nums1.length; j++) {
        nums1.push(nums2[j]);
    }
    console.log(nums1);
}
for(var i=0; i<max_arr.length; i++) {
    if(max_arr[i] == 0) {
        countZero++;
    }
}
var x=max_arr.length-countZero;
for(var j=max_arr.length-1; j>=x; j--) {
    max_arr.pop();   
}
for(var k=0; k<min_arr.length; k++) {
    max_arr.push(min_arr[k]);
}
console.log(arrange(max_arr));
