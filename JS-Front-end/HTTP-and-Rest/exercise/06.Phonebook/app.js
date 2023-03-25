function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/phonebook";

  let loadBtn = document.getElementById("btnLoad");
  let nameInput = document.getElementById("person");
  let phoneInput = document.getElementById("phone");
  let createBtn = document.getElementById("btnCreate");
  let phonebook = document.getElementById("phonebook");

  loadBtn.addEventListener("click", loadContacts);
  createBtn.addEventListener("click", createContact);

  function loadContacts() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((result) => {
        phonebook.innerHTML = "";

        let phones = Object.values(result);

        for (const { person, phone, _id } of phones) {
          let li = document.createElement("li");
          li.textContent = `${person}: ${phone}`;

          let deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          deleteBtn.id = _id;
          deleteBtn.addEventListener("click", deleteContact);

          li.appendChild(deleteBtn);
          phonebook.appendChild(li);
        }
      });
  }

  function deleteContact() {
    const id = this.id;
    fetch(`${BASE_URL}/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then(loadContacts);
  }

  function createContact() {
    if (nameInput.value !== "" && phoneInput.value !== "") {
      fetch(BASE_URL, {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          person: nameInput.value,
          phone: phoneInput.value,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          loadContacts();
          nameInput.value = "";
          phoneInput.value = "";
        });
    }
  }
}

attachEvents();
