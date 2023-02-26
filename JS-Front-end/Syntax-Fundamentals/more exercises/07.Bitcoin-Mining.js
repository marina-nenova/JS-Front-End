function solve(goldArr) {
  let bitcoinPrice = 11949.16;
  let goldPricePerGram = 67.51;
  let totalGoldMined = 0;
  let totalMoney = 0;
  let dayBought;
  let bitcoinsCount = 0;

  for (let day = 0; day < goldArr.length; day++) {
    let currentDay = day + 1;
    let currentGold = goldArr[day];
    if (currentDay % 3 === 0) {
      currentGold *= 0.7;
    }
    totalMoney += currentGold * goldPricePerGram;
    while (totalMoney >= bitcoinPrice) {
      totalMoney -= bitcoinPrice;
      if (bitcoinsCount === 0) {
        dayBought = currentDay;
      }
      bitcoinsCount += 1;
    }
  }
  console.log(`Bought bitcoins: ${bitcoinsCount}`);
  if (dayBought) {
    console.log(`Day of the first purchased bitcoin: ${dayBought}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);
