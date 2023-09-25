// Recursion

// Define a recursive function named isEven()
// Accepts a single parameter (positive whole number)
// Returns a boolean if the argument value is even or not (odd)

// My Solution #1
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else if (number % 2 === 1) {
        return false;
    } else {
        return isEven(number * -1);
    }
}

// My Solution #2:
const isEven2 = number => {
    if (number % 2 === 0) return true;
    else if (number % 2 === 1) return false;
    else return isEven(number * -1);
}

// Test Code
console.log(`isEven(50) = ${isEven(50)}`);
console.log(`isEven(75) = ${isEven(75)}`);
console.log(`isEven(-1) = ${isEven(-1)}`);

console.log(`isEven2(50) = ${isEven2(50)}`);
console.log(`isEven2(75) = ${isEven2(75)}`);
console.log(`isEven2(-1) = ${isEven2(-1)}`);
