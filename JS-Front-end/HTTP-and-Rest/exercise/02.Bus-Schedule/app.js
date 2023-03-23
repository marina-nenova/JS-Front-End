function solve() {
  let BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
  const [departBtn, arriveBtn] = document.querySelectorAll('input');
  let infoElement = document.querySelector(".info");
  let currentId = "depot";
  let stopName = "";

  function depart() {
    fetch(`${BASE_URL}${currentId}`)
      .then((res) => res.json())
      .then((result) => {
        stopName = result.name;
        currentId = result.next;
        infoElement.textContent = `Next stop ${result.name}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
      })
      .catch((err) => {
        infoElement.textContent = "Error";
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      });
  }

  async function arrive() {
    infoElement.textContent = `Arriving at ${stopName}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
