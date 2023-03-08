function storeProvision(stock, orders) {
  let stockDict = {};

  for (let i = 0; i < stock.length - 1; i += 2) {
    const product = stock[i];
    const quantity = Number(stock[i + 1]);
    stockDict[product] = quantity;
  }

  for (let i = 0; i < orders.length - 1; i += 2) {
    const product = orders[i];
    const quantity = Number(orders[i + 1]);

    if (stockDict[product]) {
      stockDict[product] += quantity;
    } else {
      stockDict[product] = quantity;
    }
  }

  for (const [product, quantity] of Object.entries(stockDict)) {
    console.log(`${product} -> ${quantity}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

// storeProvision([
//     'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
//     ],
//     [
//     'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
//     ]
//     );
