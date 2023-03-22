function loadRepos() {
  let resultElement = document.getElementById("res");

  fetch("https://api.github.com/users/testnakov/repos")
    .then((res) => res.text())
    .then((result) => {
      resultElement.textContent = result;
    });
}
