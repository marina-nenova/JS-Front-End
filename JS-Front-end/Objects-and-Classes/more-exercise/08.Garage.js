// function garage(arr) {
//   let garageStore = {};

//   for (const line of arr) {
//     let [garageNum, carInfo] = line.split(" - ");
//     let carDetails = carInfo.split(", ");

//     if (!garageStore[garageNum]) {
//       garageStore[garageNum] = [];
//     }

//     let car = {};

//     for (const carDetail of carDetails) {
//       let [feature, desc] = carDetail.split(": ");
//       car[feature] = desc;
//     }
//     garageStore[garageNum].push(car);
//   }

//   for (const garage in garageStore) {
//     console.log(`Garage № ${garage}`);
//     for (car of garageStore[garage]) {
//       let desc = [];
//       for (const prop in car) {
//         desc.push(`${prop} - ${car[prop]}`);
//       }
//       console.log(`--- ${desc.join(", ")}`);
//     }
//   }
// }

function garage(array) {
    let garageObject = {};
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      let [garageId, carInfo] = element.split(" - ");

      if (!garageObject.hasOwnProperty(garageId)) {
        garageObject[garageId] = [];
      }
      const carTokens = carInfo
        .split(", ")
        .map((x) => x.split(": "));
      const carObject = {};
      for (const [key, value] of carTokens) {
        carObject[key] = value;
      }
      garageObject[garageId].push(carObject);
    }
    print(garageObject);
   
    function print(garageObject) {
      for (const garageId of Object.keys(garageObject)) {
        console.log(`Garage № ${garageId}`);
        for (const car of garageObject[garageId]) {
   
          const carInformation = Object.entries(car)
            .map(([key, value]) => `${key} - ${value}`)
            .join(", ");
          console.log(`--- ${carInformation}`);
        }
      }
    }
  }
   
  garage([
    "17 - color: blue, fuel type: diesel",
    "1 - color: red, manufacture: Audi",
    "2 - fuel type: petrol",
    "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
  ]);

garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);

garage([
  "1 - color: green, fuel type: petrol",
  "1 - color: dark red, manufacture: WV",
  "2 - fuel type: diesel",
  "3 - color: dark blue, fuel type: petrol",
]);
