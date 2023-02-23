function solve(number) {
  let sum = 0;
  let numAsString = number.toString();
  for (let i = 0; i < numAsString.length; i++) {
    const element = Number(numAsString[i]);
    sum += element;
  }
  console.log(sum);
}

solve(245678);
solve(97561);
solve(543);
