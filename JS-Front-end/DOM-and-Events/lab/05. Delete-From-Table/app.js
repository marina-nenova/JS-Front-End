function deleteByEmail() {
  let emailElements = document.querySelectorAll("tr td:nth-of-type(2)");
  let emailsArr = Array.from(emailElements);

  let emailInput = document.querySelector('input[name="email"]').value;
  let resultElement = document.getElementById("result");

  let targetElement = emailsArr.find((x) => x.textContent === emailInput);

  if (targetElement) {
    targetElement.parentNode.remove();
    resultElement.textContent = "Deleted.";
  } else {
    resultElement.textContent = "Not found.";
  }
  emailInput.value = "";
}
