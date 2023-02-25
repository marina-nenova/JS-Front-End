function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let expenses = 0;
  for (let lostFight = 1; lostFight <= lostFights; lostFight++) {
    if (lostFight % 2 === 0) {
      expenses += helmetPrice;
    }
    if (lostFight % 3 === 0) {
      expenses += swordPrice;
    }
    if (lostFight % 6 === 0) {
      expenses += shieldPrice;
    }
    if (lostFight % 12 === 0) {
      expenses += armorPrice;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);

solve(23, 12.5, 21.5, 40, 200);
