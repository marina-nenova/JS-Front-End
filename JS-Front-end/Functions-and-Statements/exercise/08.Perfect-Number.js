function perfectNumber(number) {
  let aliquotSum = 0;
  for (let divisor = 0; divisor < number; divisor++) {
    if (number % divisor === 0) {
      aliquotSum += divisor;
    }
  }
  if (aliquotSum === number) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
