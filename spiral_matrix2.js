var n=3;
var top=0,left=0,right=n-1,bottom=n-1;
var count=0;
var mat=1;
var matrix = [];
for(var i=0; i<n; i++) {
    matrix[i] = Array(n);
}
while(count<n*n) {
    var temp=[];
    for(var i=left; i<=right && count<n*n; i++) {
        matrix[top][i] = mat;
        mat++;
        count++;
    }
    top++;
    for(var i=top; i<=bottom && count<n*n; i++) {
        matrix[i][right] = mat;
        mat++;
        count++;
    }
    right--;
    for(var i=right; i>=left && count<n*n; i--) {
        matrix[bottom][i] = mat;
        mat++;
        count++;
    }
    bottom--;
    for(var i=bottom; i>=top && count<n*n; i--) {
        matrix[i][left] = mat;
        mat++;
        count++;
    }
    left++;
}
console.log(matrix);