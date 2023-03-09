function inventory(heroesInfo) {
  let heroes = [];

  for (const heroInfo of heroesInfo) {
    let [name, level, items] = heroInfo.split(" / ");
    const hero = {
      name,
      level: Number(level),
      items,
    };
    heroes.push(hero);
  }

  heroes.sort((a, b) => a.level - b.level);

  for (const { name, level, items } of heroes) {
    console.log(`Hero: ${name}`);
    console.log(`level => ${level}`);
    console.log(`items => ${items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

inventory([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
