var nums = [1,4,5,6], target = 5,flag=false;
    var start = 0;
    var end = nums.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            flag = true;
            break;
        }

        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    if(flag) {
        console.log(mid);
    }
    else {
        console.log(start);
    }