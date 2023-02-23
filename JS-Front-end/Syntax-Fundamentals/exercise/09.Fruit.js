function solve(fruit, grams, pricePerKilo) {
  let weigthInKilo = grams / 1000;
  let moneyNeeded = weigthInKilo * pricePerKilo;
  console.log(
    `I need $${moneyNeeded.toFixed(2)} to buy ${weigthInKilo.toFixed(2)} kilograms ${fruit}.`
  );
}

solve("orange", 2500, 1.8);

solve("apple", 1563, 2.35);
