function chck_equal(bag) {
    var res = true;
    for(var i=1; i<bag.length; i++) {
      if(bag[0] == bag[i]) {
        continue;
      }
      else {
        return false;
      }
    }
    return res;
  }
  

  var strs = ["flower","flow","flight"];
  var res="",len=0,min=Infinity;
  for(var k=0; k<strs.length; k++) {
    len = strs[k].length;
    if( len<min) {
      min = len;
    }
  }
  
  for(var i=0; i<min; i++) {
    var bag=""
    for( var j=0; j<strs.length; j++) {
      bag = bag+strs[j][i];
    }
    if(chck_equal(bag)) {
      res = res+bag[0];
    }
      else {
          break;
      }
  }
  console.log(res);