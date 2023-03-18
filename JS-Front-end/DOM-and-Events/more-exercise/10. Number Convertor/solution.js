function solve() {
  let toMenu = document.getElementById("selectMenuTo");

  let binaryOption = document.createElement("option");
  binaryOption.textContent = "Binary";
  binaryOption.value = "binary";

  let hexadecimalOption = document.createElement("option");
  hexadecimalOption.textContent = "Hexadecimal";
  hexadecimalOption.value = "hexadecimal";

  toMenu.appendChild(binaryOption);
  toMenu.appendChild(hexadecimalOption);

  let convertBtn = document.querySelector("button");
  convertBtn.addEventListener("click", convert);

  function convert() {
    let resultElement = document.getElementById("result");
    let numberInput = document.getElementById("input");
    let number = Number(numberInput.value);

    if (toMenu.value === "binary") {
      resultElement.value = number.toString(2);
    } else if (toMenu.value === "hexadecimal") {
      resultElement.value = number.toString(16).toUpperCase();
    }
  }
}
