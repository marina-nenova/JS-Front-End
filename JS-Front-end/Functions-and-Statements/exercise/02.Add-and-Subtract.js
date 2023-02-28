function subtract(num1, num2, num3) {
  let result = sum(num1, num2) - num3;
  console.log(result);
  function sum(a, b) {
    return a + b;
  }
}

subtract(23, 6, 10);
subtract(1, 17, 30);
subtract(42, 58, 100);
