function lockedProfile() {
  BASE_URL = "http://localhost:3030/jsonstore/advanced/profiles/";
  let main = document.getElementById("main");
  main.innerHTML = "";

  fetch(BASE_URL)
    .then((res) => res.json())
    .then((result) => {
      let users = Object.values(result);

      for (let index = 0; index < users.length; index++) {
        let user = users[index];
        let profile = document.createElement("div");
        profile.classList.add("profile");

        let imageElement = document.createElement("img");
        imageElement.classList.add("userIcon");
        imageElement.src = "./iconProfile2.png";
        profile.appendChild(imageElement);

        let lockLabel = document.createElement("label");
        lockLabel.textContent = "Lock";
        profile.appendChild(lockLabel);

        let lockRadioButton = document.createElement("input");
        lockRadioButton.type = "radio";
        lockRadioButton.name = `user${index + 1}Locked`;
        lockRadioButton.value = "lock";
        lockRadioButton.checked = true;
        profile.appendChild(lockRadioButton);

        let unlockLabel = document.createElement("label");
        unlockLabel.textContent = "Unlock";
        profile.appendChild(unlockLabel);

        let unlockRadioButton = document.createElement("input");
        unlockRadioButton.type = "radio";
        unlockRadioButton.name = `user${index + 1}Locked`;
        unlockRadioButton.value = "unlock";
        unlockRadioButton.checked = false;
        profile.appendChild(unlockRadioButton);

        profile.appendChild(document.createElement("br"));
        profile.appendChild(document.createElement("hr"));

        let usernameLabel = document.createElement("label");
        usernameLabel.textContent = "Username";
        profile.appendChild(usernameLabel);

        let usernameContainer = document.createElement("input");
        usernameContainer.type = "text";
        usernameContainer.name = `user${index + 1}Username`;
        usernameContainer.value = user.username;
        usernameContainer.disabled = true;
        usernameContainer.readOnly = true;
        profile.appendChild(usernameContainer);

        let hiddenInfoConteiner = document.createElement("div");
        hiddenInfoConteiner.id = `user${index + 1}HiddenFields`;
        hiddenInfoConteiner.style.display = "none";

        hiddenInfoConteiner.appendChild(document.createElement("hr"));

        let emailLabel = document.createElement("label");
        emailLabel.textContent = "Email:";
        hiddenInfoConteiner.appendChild(emailLabel);

        let emailElement = document.createElement("input");
        emailElement.type = "email";
        emailElement.name = `user${index + 1}Email`;
        emailElement.value = user.email;
        emailElement.disabled = true;
        emailElement.readOnly = true;
        hiddenInfoConteiner.appendChild(emailElement);

        let ageLabel = document.createElement("label");
        ageLabel.textContent = "Age:";
        hiddenInfoConteiner.appendChild(ageLabel);

        let ageElement = document.createElement("input");
        ageElement.type = "email";
        ageElement.name = `user${index + 1}Age`;
        ageElement.value = user.age;
        ageElement.disabled = true;
        ageElement.readOnly = true;
        hiddenInfoConteiner.appendChild(ageElement);

        profile.appendChild(hiddenInfoConteiner);

        let buttonElement = document.createElement("button");
        buttonElement.textContent = "Show more";
        profile.appendChild(buttonElement);

        main.appendChild(profile);
      }

      let buttonElements = document.querySelectorAll("button");

      for (let i = 0; i < buttonElements.length; i++) {
        const button = buttonElements[i];
        let parentDiv = button.parentElement;
        let lockedState = parentDiv.querySelector('input[value="lock"]');
        let hiddenInfoElement = parentDiv.querySelector(
          `div[id="user${i + 1}HiddenFields"]`
        );

        button.addEventListener("click", () => {
          if (!lockedState.checked && button.textContent === "Show more") {
            hiddenInfoElement.style.display = "block";
            button.textContent = "Hide it";
          } else if (!lockedState.checked && button.textContent === "Hide it") {
            hiddenInfoElement.style.display = "none";
            button.textContent = "Show more";
          }
        });
      }
    });
}
