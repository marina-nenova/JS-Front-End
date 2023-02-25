function solve(n, operator, m) {
  let result = 0;
  switch (operator) {
    case "+":
      result = n + m;
      break;
    case "-":
      result = n - m;
      break;
    case "/":
      result = n / m;
      break;
    case "*":
      result = n * m;
      break;
  }
  console.log(result.toFixed(2));
}

solve(5, "+", 10);

solve(25.5, "-", 3);
