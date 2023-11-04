// Write a program that creates a string that:

// Represents an 8x8 grid
// Using newline characters to separate lines
// Each position in the grid is either a space or # character
// The characters should form a chessboard

// Define a variable named size & it will be initially assigned the value of 8
// The program should work on any size; outputting a grid of the given width x height

let size = 8;
let chessboard = ""

for (row = 1; row <= size; row++) {
    for (column = 1; column <= size; column++) {
        if (row % 2 !== 0 && column % 2 !== 0) {
            chessboard += " ";
        } else if (row % 2 !== 0 && column % 2 === 0) {
            chessboard += "#";
        } else if (row % 2 === 0 && column % 2 !== 0) {
            chessboard += "#";
        } else {
            chessboard += " ";
        }
    }
    chessboard += "\n";
}

console.log(chessboard);
