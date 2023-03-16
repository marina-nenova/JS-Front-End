function solve() {
  let buttons = Array.from(document.querySelectorAll(".add-product"));
  let resultTextArea = document.getElementsByTagName("textarea")[0];

  let totalMoney = 0;
  let bought = new Set();

  for (const btn of buttons) {
    btn.addEventListener("click", addProduct);
    console.log(btn);
  }

  function addProduct(e) {
    let product = e.currentTarget.parentNode.parentNode;
    let productName = product.querySelector(".product-title");
    let productPrice = product.querySelector(".product-line-price");

    bought.add(productName.textContent);
    totalMoney += Number(productPrice.textContent);

    resultTextArea.value += `Added ${productName.textContent} for ${Number(
      productPrice.textContent
    ).toFixed(2)} to the cart.\n`;
  }

  let checkOutBtn = document.querySelector(".checkout");
  checkOutBtn.addEventListener("click", checkout);

  function checkout(e) {
    resultTextArea.value += `You bought ${[...bought].join(", ")} for ${totalMoney.toFixed(2)}.`;
    e.currentTarget.disabled = true;

    for (const btn of buttons) {
      btn.disabled = true;
      
    }
  }
}
