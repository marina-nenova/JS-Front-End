function solve(startYield) {
  let daysMined = 0;
  let totalAmount = 0;
  while (startYield >= 100) {
    totalAmount += startYield;
    startYield -= 10;
    daysMined += 1;
    if (totalAmount >= 26) {
      totalAmount -= 26;
    }
  }
  if (totalAmount >= 26) {
    totalAmount -= 26;
  }
  console.log(daysMined);
  console.log(totalAmount);
}

solve(111);
solve(450);
