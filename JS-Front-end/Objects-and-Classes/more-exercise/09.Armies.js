function armiesInfo(arr) {
  let armies = {};

  for (const line of arr) {
    if (line.includes("arrives")) {
      let [leader, _command] = line.split(" arrives");
      armies[leader] = {};
    } else if (line.includes(": ")) {
      let [leader, armyInfo] = line.split(": ");
      let [armyName, armyCount] = armyInfo.split(", ");
      if (leader in armies) {
        armies[leader][armyName] = Number(armyCount);
      }
    } else if (line.includes(" + ")) {
      let [army, count] = line.split(" + ");
      for (const armiesInfo of Object.values(armies)) {
        if (armiesInfo[army]) {
          armiesInfo[army] += Number(count);
        }
      }
    } else if (line.includes("defeated")) {
      let [leader, _command] = line.split(" defeated");
      if (armies[leader]) {
        delete armies[leader];
      }
    }
  }

  let armiesCount = {};

  for (const leader in armies) {
    armiesCount[leader] = 0;

    for (const armie in armies[leader]) {
      armiesCount[leader] += armies[leader][armie];
    }
  }

  let sorted = Object.fromEntries(
    Object.entries(armiesCount).sort((leaderA, leaderB) => {
      let [_leaderA, countA] = leaderA;
      let [_leaderB, countB] = leaderB;

      return countB - countA;
    })
  );
  for (const leader in sorted) {
    console.log(`${leader}: ${sorted[leader]}`);

    entries = Object.entries(armies[leader]);
    let sortedArmies = Object.fromEntries(
      Object.entries(armies[leader]).sort((a, b) => {
        let [, countA] = a;
        let [, countB] = b;
        return countB - countA;
      })
    );

    for (const [name, count] of Object.entries(sortedArmies)) {
      console.log(`>>> ${name} - ${count}`);
    }
  }
}

armiesInfo([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);

// armiesInfo([
//   "Rick Burr arrives",
//   "Findlay arrives",
//   "Rick Burr: Juard, 1500",
//   "Wexamp arrives",
//   "Findlay: Wexamp, 34540",
//   "Wexamp + 340",
//   "Wexamp: Britox, 1155",
//   "Wexamp: Juard, 43423",
// ]);
