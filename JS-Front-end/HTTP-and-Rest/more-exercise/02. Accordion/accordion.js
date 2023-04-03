function solution() {
  const articlesUrl = "http://localhost:3030/jsonstore/advanced/articles/list/";
  const detailsUrl =
    "http://localhost:3030/jsonstore/advanced/articles/details/";

  let mainSection = document.getElementById("main");

  fetch(articlesUrl)
    .then((res) => res.json())
    .then((result) => {
      result.forEach((article) => {
        let accordion = document.createElement("div");
        accordion.classList.add("accordion");

        let head = document.createElement("div");
        head.classList.add("head");

        let titleElement = document.createElement("span");
        titleElement.textContent = article.title;
        head.appendChild(titleElement);

        let button = document.createElement("button");
        button.classList.add("button");
        button.id = article._id;
        button.textContent = "MORE";
        button.addEventListener("click", detailsHandler);
        head.appendChild(button);

        accordion.appendChild(head);
        mainSection.appendChild(accordion);

        let extraContainer = document.createElement("div");
        extraContainer.classList.add("extra");
        extraContainer.style.display = "none";
        let detailsElement = document.createElement("p");
        extraContainer.appendChild(detailsElement);
        accordion.appendChild(extraContainer);

        function detailsHandler(e) {
          let currentArticle = e.currentTarget.parentElement.parentElement;
          let extraContainer = currentArticle.querySelector(".extra");

          if (e.currentTarget.textContent === "MORE") {
            e.currentTarget.textContent = "LESS";
            let pElement = extraContainer.querySelector("p");

            fetch(`${detailsUrl}${this.id}`)
              .then((res) => res.json())
              .then((result) => {
                pElement.textContent = result.content;
                extraContainer.style.display = "block";
              });
          } else {
            e.currentTarget.textContent = "MORE";
            extraContainer.style.display = "none";
          }
        }
      });
    });
}

solution();
