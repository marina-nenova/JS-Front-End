function getInfo() {
  const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";

  let stopId = document.getElementById("stopId").value;
  let nameElement = document.getElementById("stopName");
  let listElement = document.getElementById("buses");

  listElement.innerHTML = '';

  fetch(`${BASE_URL}${stopId}`)
  .then(res => res.json())
  .then((result) => {
    nameElement.textContent = result.name;

    entries = Object.entries(result.buses);
    entries.forEach(([bus, minutes]) => {
        let liElement = document.createElement('li');
        liElement.textContent = `Bus ${bus} arrives in ${minutes} minutes`;
        listElement.appendChild(liElement);
    });
  })
  .catch(() => nameElement.textContent = 'Error');
}
