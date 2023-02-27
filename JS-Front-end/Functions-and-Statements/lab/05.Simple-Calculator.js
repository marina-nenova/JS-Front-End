function solve(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
  }
  function multiply(a, b) {return a * b;};
  function divide(a, b) {return a / b;};
  function add(a, b) {return a + b;};
  function subtract(a, b) {return a - b;};

  console.log(result);
}

solve(5, 5, "multiply");
solve(40, 8, "divide");
solve(12, 19, "add");
solve(50, 13, "subtract");
