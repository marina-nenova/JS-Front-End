function solve(order, count) {
  total = 0;
  switch (order) {
    case "coffee":
      total = count * 1.5;
      break;
    case "water":
      total = count * 1.0;
      break;
    case "coke":
      total = count * 1.4;
      break;
    case "snacks":
      total = count * 2.0;
      break;
  }
  console.log(total.toFixed(2));
}

solve("water", 5);
solve("coffee", 2);
