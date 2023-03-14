function evenOddRange(n) {
  if (n % 2 != 0) {
    console.log("Weird");
  } else if (n > 1 && n < 6 && n % 2 === 0) {
    console.log("Not Weird");
  } else if (n > 5 && n < 21 && n % 2 === 0) {
    console.log("Not Weird");
  } else if (n > 20 && n % 2 === 0) {
    console.log("Not Weird");
  }
}

evenOddRange(24);
