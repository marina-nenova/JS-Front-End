function toggle() {
  let buttonElement = document.getElementsByClassName("button")[0];
  let extraTextElement = document.getElementById("extra");

  if (buttonElement.textContent === "More") {
    buttonElement.addEventListener("click", showMore());
    buttonElement.textContent = "Less";
  } else {
    buttonElement.addEventListener("click", showLess());
    buttonElement.textContent = "More";
  }

  function showMore(e) {
    extraTextElement.style.display = "block";
  }

  function showLess(e) {
    extraTextElement.style.display = "none";
  }
}
