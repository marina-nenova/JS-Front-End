function sumTable() {
  let prices = document.querySelectorAll("tr td:nth-of-type(2)");
  let totalElement = document.getElementById("sum");

  let sum = Array.from(prices).reduce((sum, price) => {
    return sum + (Number(price.textContent) || 0);
  }, 0);

  totalElement.textContent = sum;
}
