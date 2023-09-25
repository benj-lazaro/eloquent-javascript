// Minimum

// Write a function named min that:
// Simulates the Math.min() function
// It takes two (2) arguments
// Returns their minimum

// My solution #1: function expression with explicit return
const min = (x, y) => { 
    if (x < y) return x;
    return y;
}

// My solution #2: tertiary operator & implicit return
const minVer2 = (x, y) => x < y ? x : y;


// Test Code
console.log(min(20, 2));
console.log(min(20, 200));
console.log(min(234234, 57456));

console.log(minVer2(20, 2));
console.log(minVer2(20, 200));
console.log(minVer2(234234, 57456));
