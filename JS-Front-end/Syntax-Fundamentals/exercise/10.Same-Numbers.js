function solve(number) {
  let numAsString = number.toString();
  let firstNum = numAsString[0];
  let sumNums = 0;
  let same = true;
  for (const num of numAsString) {
    sumNums += Number(num);
    if (num !== firstNum) {
      same = false;
    }
  }
  console.log(same);
  console.log(sumNums);
}

solve(2222222);
solve(1234);
