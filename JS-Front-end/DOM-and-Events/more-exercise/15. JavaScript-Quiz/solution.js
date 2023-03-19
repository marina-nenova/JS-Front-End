function solve() {
  let answers = Array.from(document.querySelectorAll(".quiz-answer"));
  let correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];
  let correctCount = 0;

  answers.forEach((answerElement) =>
    answerElement.addEventListener("click", process)
  );

  function process(e) {
    let parentSection = e.currentTarget.parentElement.parentElement;
    let answer = e.currentTarget.querySelector(".answer-text").textContent;

    if (correctAnswers.includes(answer)) {
      correctCount += 1;
    }

    parentSection.style.display = "none";

    let nextSection = parentSection.nextElementSibling;
    nextSection.style.display = "block";

    let resultElement = document.querySelector(
      "#results > .results-inner > h1"
    );

    if (correctCount === 3) {
      resultElement.textContent = "You are recognized as top JavaScript fan!";
    } else {
      resultElement.textContent = `You have ${correctCount} right answers`;
    }
  }
}
