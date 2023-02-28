function factorialDivision(num1, num2) {
  let num1Result = factorialResult(num1);
  let num2Result = factorialResult(num2);

  function factorialResult(number) {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
  let divisionResult = num1Result / num2Result;
  console.log(divisionResult.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
