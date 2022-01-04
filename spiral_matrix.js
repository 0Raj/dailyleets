var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
var top=0,left=0,right=matrix[0].length-1,bottom=matrix.length-1;
var count=0,m=matrix.length,n=matrix[0].length,bag=[];
while(count<m*n) {
    for(var i=left; i<=right && count<m*n; i++) {
        bag.push(matrix[top][i]);
        count++;
    }
    top++;
    for(var i=top; i<=bottom && count<m*n; i++) {
        bag.push(matrix[i][right]);
        count++;
    }
    right--;
    for(var i=right; i>=left && count<m*n; i--) {
        bag.push(matrix[bottom][i]);
        count++;
    }
    bottom--;
    for(var i=bottom; i>=top && count<m*n; i--) {
        bag.push(matrix[i][left]);
        count++;
    }
    left++;
}
console.log(bag);