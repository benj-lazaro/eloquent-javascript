// Bean Counting

// Write a function named countBs
// Takes a string as its only argument
// Returns a number that indicates how many uppercase B characters in the string

// Write another function called countChar
// Accepts two arguements = a string & the character to be counted
// countBs() must make use of this function

// My Solution
const countBs = (string) => countChar(string, "B"); 

const countChar = (string, charSearch) => {
    let counter = 0;

    for (let character of string) {
        if (character === charSearch) counter++
    }
    return counter;
}

// Test Code
let testString = "Babayaga The Boogy Man Beats Down The Bodacious Mafia.";
console.log(`string = ${testString}`);

console.log(`countBs(string, 'B') = ${countBs(testString, "B")}`);

console.log(`countChar(string, 'a') = ${countChar(testString, "a")}`);
