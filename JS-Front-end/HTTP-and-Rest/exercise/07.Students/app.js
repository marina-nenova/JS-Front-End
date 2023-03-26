function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/students";
  let tableBody = document.querySelector("#results > tbody");
  loadStudents();

  function loadStudents() {
    tableBody.innerHTML = "";
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((result) => {
        Object.values(result).forEach((student) => {
          let row = document.createElement("tr");

          for (let i = 0; i < 4; i++) {
            const data = Object.values(student)[i];
            let tableData = document.createElement("td");
            tableData.textContent = data;
            row.appendChild(tableData);
          }

          tableBody.appendChild(row);
        });
      });
  }

  let fNameInput = document.querySelector('input[name="firstName"]');
  let lNameInput = document.querySelector('input[name="lastName"]');
  let numberInput = document.querySelector('input[name="facultyNumber"]');
  let gradeInput = document.querySelector('input[name="grade"]');

  let submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", addStudent);

  function addStudent() {
    if (
      fNameInput.value &&
      lNameInput.value &&
      numberInput.value &&
      gradeInput.value
    ) {
      let firstName = fNameInput.value;
      let lastName = lNameInput.value;
      let facultyNumber = numberInput.value;
      let grade = gradeInput.value;

      let newStudent = { firstName, lastName, facultyNumber, grade };

      fetch(BASE_URL, {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newStudent),
      })
        .then((res) => res.json())
        .then(() => {
          loadStudents();

          fNameInput.value = "";
          lNameInput.value = "";
          numberInput.value = "";
          gradeInput.value = "";
        });
    }
  }
}

attachEvents();
