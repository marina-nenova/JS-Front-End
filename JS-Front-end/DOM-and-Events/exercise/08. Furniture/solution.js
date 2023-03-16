function solve() {
  let tableBody = document.querySelector('tbody');
  let [generateBtn, buyBtn] = document.getElementsByTagName("button");

  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  let inputElement = document.querySelector("#exercise > textarea");
  console.log(inputElement.value);

  function generate(e) {
    let textInput = e.currentTarget.previousElementSibling;

    for (const furniture of JSON.parse(textInput.value)) {
      const row = document.createElement("tr");

      let imageData = document.createElement("td");
      let img = document.createElement("img");
      img.src = furniture.img;
      imageData.appendChild(img);
      row.appendChild(imageData);

      let nameData = document.createElement("td");
      let furnitureName = document.createElement("p");
      furnitureName.textContent = furniture.name;
      nameData.appendChild(furnitureName);
      row.appendChild(nameData);

      let priceData = document.createElement("td");
      let furniturePrice = document.createElement("p");
      furniturePrice.textContent = furniture.price;
      priceData.appendChild(furniturePrice);
      row.appendChild(priceData);

      let decData = document.createElement("td");
      let furnitureDec = document.createElement("p");
      furnitureDec.textContent = furniture.decFactor;
      decData.appendChild(furnitureDec);
      row.appendChild(decData);

      const inputData = document.createElement("td");
      const input = document.createElement("input");
      input.type = "checkbox";
      inputData.appendChild(input);
      row.appendChild(inputData);

      tableBody.appendChild(row);
    }
  }

  function buy(e) {
    let textOutput = e.currentTarget.previousElementSibling;

    let checkboxes = Array.from(
      document.querySelectorAll('input[type="checkbox"]'))
      .filter((cb) => cb.checked);

      let bought = [];
      let totalPrice = 0;
      let totalDecFactor = 0;

      for (const checkbox of checkboxes) {
        let [name, price, decFactor] = checkbox.parentNode.parentNode.getElementsByTagName('p');
        
        bought.push(name.textContent);
        totalPrice += Number(price.textContent);
        totalDecFactor += Number(decFactor.textContent);
      }

      let averageDecFactor = (totalDecFactor / bought.length) || 0;

      textOutput.value =
      `Bought furniture: ${bought.join(', ')}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${averageDecFactor}`;
  }
}
