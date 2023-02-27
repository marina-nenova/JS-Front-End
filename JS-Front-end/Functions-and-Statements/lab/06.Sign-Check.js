function solve(...numbers) {
  let negativeCount = 0;
  for (const num of numbers) {
    if (num < 0) {
      negativeCount++;
    }
  }
  if (negativeCount % 2 == 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

solve(5, 12, -15);

solve(-6, -12, 14);
solve(-1, -2, -3);
