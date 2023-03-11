// Given an array of integers, calculate the ratios of its elements that are positive,
// negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places,
// though answers with absolute error of up to 10^-4 are acceptable.

// Example

// There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000,
//  2/5 = 0.400000 and 1/5 = 0.200000. Results are printed as:
// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
  // Write your code here
  let positiveNumbers = [];
  let negativeNumbers = [];
  let zeros = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers.push(arr[i]);
    } else if (arr[i] < 0) {
      negativeNumbers.push(arr[i]);
    } else {
      zeros.push(arr[i]);
    }
  }
  let positiveRatios = positiveNumbers.length / arr.length;
  let negativeRatios = negativeNumbers.length / arr.length;
  let zerosRatios = zeros.length / arr.length;

  positiveRatios = positiveRatios.toFixed(6);
  negativeRatios = negativeRatios.toFixed(6);
  zerosRatios = zerosRatios.toFixed(6);

  console.log(positiveRatios);
  console.log(negativeRatios);
  console.log(zerosRatios);
}

plusMinus([2, -3, 0, 4, 5, -1, -4, 0]);
