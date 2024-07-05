class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board) {
        let row = new Map();
        let col = new Map();
        let squares = new Map();

        for(let r = 0; r < 9; r++) {
            for(let c = 0; c < 9; c++) {
                //The entry
                const cell = board[r][c];
                // If you see a '.' just move on
                if(cell === '.'){
                    continue;
                }
                if(
                    //checking if it exists in a row, a col or a square
                    row.get(r)?.has(cell) ||
                    col.get(c)?.has(cell) ||
                    squares.get(Math.floor(r/3) * 3 + Math.floor(c/3))?.has(cell)
                ){
                    return false;
                }
                //If you see a number add it to the corresponding row, col and square.
                row.set(r, new Set(row.get(r)).add(cell));
                col.set(c, new Set(col.get(c)).add(cell));
                squares.set(
                    Math.floor(r/3) * 3 + Math.floor(c/3),
                    new Set(
                        squares.get(Math.floor(r/3) * 3 + Math.floor(c/3))
                    ).add(cell)
                );

            }
        }

        return true;
    }
}

const board1 = [["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]];

const board2 =  [["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]];

const solution1 = new Solution();

//console.log(solution1.isValidSudoku(board1));
console.log(solution1.isValidSudoku(board1));