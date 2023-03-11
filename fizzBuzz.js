// Write a program that takes in an array of numbers (n) whereby if a number is
// divisible by 3, it prints "Fizz", and if divisible by 5, it prints "Buzz"
// and if the number is divisible by both 3 and 5, it prints "FizzBuzz"

function fizzBuzz(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 3 === 0 && n[i] % 5 === 0) {
      console.log("FizzBuzz");
    } else if (n[i] % 3 === 0) {
      console.log("Fizz");
    } else if (n[i] % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(n[i]);
    }
  }
}

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

fizzBuzz(numbers);
