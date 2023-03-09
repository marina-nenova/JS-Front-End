function catalogue(stringArr) {
  let result = {};

  for (const line of stringArr) {
    let [name, price] = line.split(" : ");
    let firstLetter = name[0];

    if (!result.hasOwnProperty(firstLetter)) {
      result[firstLetter] = [];
    }

    result[firstLetter].push({ name, price });
  }

  for (let key of Object.keys(result).sort()) {
    console.log(key);
    for (let prod of result[key].sort((a, b) => a.name.localeCompare(b.name))) {
      console.log(` ${prod.name}: ${prod.price}`);
    }
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

catalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
