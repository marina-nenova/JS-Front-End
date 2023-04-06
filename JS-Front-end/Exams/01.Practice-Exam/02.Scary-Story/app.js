window.addEventListener("load", solve);

function solve() {
  let firstNameInput = document.getElementById("first-name");
  let lastNameInput = document.getElementById("last-name");
  let ageInput = document.getElementById("age");
  let titleInput = document.getElementById("story-title");
  let genreInput = document.getElementById("genre");
  let storyInput = document.getElementById("story");
  let publishBtn = document.getElementById("form-btn");
  let mainElement = document.getElementById("main");

  let previewElement = document.getElementById("preview-list");

  publishBtn.addEventListener("click", publishStory);
  let currentStory = {};

  function publishStory(e) {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let title = titleInput.value;
    let genre = genreInput.value;
    let story = storyInput.value;
    if (
      firstName !== "" &&
      lastName !== "" &&
      age !== "" &&
      title !== "" &&
      story !== ""
    ) {
      currentStory = { firstName, lastName, age, title, genre, story };

      let liElement = createElement(
        "li",
        previewElement,
        null,
        ["story-info"]
      );
      let article = createElement('article', liElement);
      createElement("h4", article, `Name: ${firstName} ${lastName}`);
      createElement("p", article, `Age: ${age}`);
      createElement("p", article, `Title: ${title}`);
      createElement("p", article, `Genre: ${genre}`);
      createElement("p", article, `${story}`);

      let saveBtn = createElement("button", liElement, "Save Story", [
        "save-btn",
      ]);
      let editBtn = createElement("button", liElement, "Edit Story", [
        "edit-btn",
      ]);
      let deleteBtn = createElement("button", liElement, "Delete Story", [
        "delete-btn",
      ]);

      e.currentTarget.disabled = true;

      firstNameInput.value = "";
      lastNameInput.value = "";
      ageInput.value = "";
      titleInput.value = "";
      storyInput.value = "";

      editBtn.addEventListener("click", () => {
        firstNameInput.value = currentStory.firstName;
        lastNameInput.value = currentStory.lastName;
        ageInput.value = currentStory.age;
        titleInput.value = currentStory.title;
        genreInput.value = currentStory.genre;
        storyInput.value = currentStory.story;

        publishBtn.disabled = false;
        previewElement.innerHTML = "";
      });

      deleteBtn.addEventListener("click", () => {
        previewElement.innerHTML = "";
        publishBtn.disabled = false;
      });

      saveBtn.addEventListener("click", () => {
        mainElement.innerHTML = "";
        createElement("h1", mainElement, "Your scary story is saved!");
      });
    }

  }

  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHtml
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }
      if (content && type === "input") {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement[key] = attributes[key];
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
