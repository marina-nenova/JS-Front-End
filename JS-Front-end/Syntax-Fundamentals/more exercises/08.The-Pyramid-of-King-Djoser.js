function solve(base, increment) {
  let steps = 0;
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let height = 0;
  while (base > 0) {
    steps += 1;
    let stepArea = base * base;
    let stoneArea = (base - 2) * (base - 2);
    let outerLayer = stepArea - stoneArea;
    if (base <= 2) {
      gold += stepArea * increment;
      break;
    }
    if (steps % 5 === 0) {
      lapisLazuli += outerLayer * increment;
    } else {
      marble += outerLayer * increment;
    }
    stone += stoneArea * increment;
    base -= 2;
  }
  height = Math.floor(steps * increment);

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.ceil(height)}`);
}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);
