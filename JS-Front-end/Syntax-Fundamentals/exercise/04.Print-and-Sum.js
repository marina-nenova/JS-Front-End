function solve(num1, num2) {
  let numArr = [];
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    numArr.push(i);
    sum += i;
  }
  console.log(numArr.join(" "));
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);
