function max_of(bag,max) {
    if(bag>max) {
      return bag;
    }
    else {
      return max;
    }
  }
      var nums = [-2,1,-3,4,-1,2,1,-5,4];
      var max_end=nums[0],res = nums[0];
  
  for(var i=1; i<nums.length; i++) {
    max_end = max_of((max_end+nums[i]),nums[i]);
    res = max_of(max_end,res);
    
  } 
  console.log(res);