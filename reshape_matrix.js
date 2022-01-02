var  mat = [[1,2],[3,4]], r = 1, c = 4;

if(mat.length*mat[0].length != r*c) {
    return mat;
}
else {
    var res=[],temp_arr=[];
    for(var i=0; i<mat.length; i++) {
        for(var j=0; j<mat[i].length; j++) {
           temp_arr.push(mat[i][j]);
        }
    }
    var k=0;
         for(var i=0; i<r; i++) {
            var temp_arr_1=[];
            for(var j=0; j<c; j++) {
                temp_arr_1.push(temp_arr[k]);
                k++;
            }
            res.push(temp_arr_1);
        }
    
    console.log(res);
}