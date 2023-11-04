// FizzBuzz
// Write a program that prints all number from 1 to 100 then:
// Print "Fizz" if the number is divisible by 3
// Print "Buzz" if the number is divisible by 5 BUT NOT 3
// Print "FizzBuzz" if the number is BOTH divisible by 3 and 5

let lastNumber = 100;

// For Loop Implementation
console.log("For Loop Implementation");
for (number = 1; number <= lastNumber; number++) {
   if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
   } else if (number % 3 !== 0 && number % 5 === 0) {
    console.log("Buzz");
   } else if (number % 3 === 0) {
    console.log("Fizz");
   } else {
    console.log(number);
   }
}

// While Loop Implementation
console.log("While Loop Implementation");
number = 1;
while (number <= lastNumber) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 !==0 && number % 5 === 0) {
        console.log("Buzz");
    } else if (number % 3 === 0){
        console.log("Fizz");
    } else {
        console.log(number);
    }
    number++;
}