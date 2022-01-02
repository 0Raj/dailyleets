var grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];
var perimeter = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                perimeter += 4;
                if (j > 0 && grid[i][j - 1] ==1) {
                    perimeter -= 2;
                }
                if (i > 0 && grid[i - 1][j] == 1) {
                    perimeter -= 2;
                }
            }
        }
    }
    console.log(perimeter);