function oddEvenSum(number) {
  let numAsString = number.toString();
  let evenSum = 0;
  let oddSum = 0;
  for (const char of numAsString) {
    let digit = Number(char);
    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);
