function create(words) {
  for (const word of words) {
    let contentElement = document.getElementById("content");

    let newDivElement = document.createElement("div");
    let newParagraph = document.createElement("p");
    newParagraph.textContent = word;
    newParagraph.style.display = "none";

    newDivElement.appendChild(newParagraph);

    newDivElement.addEventListener("click", displayHandler);

    function displayHandler(e) {
      let paragraph = e.currentTarget.querySelector("p");
      paragraph.style.display = "inline-block";
    }

    contentElement.appendChild(newDivElement);
  }
}
