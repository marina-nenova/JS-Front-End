function solve(substr, text) {
  let words = text.split(" ");
  let match = false;
  for (const word of words) {
    if (word.toLowerCase() === substr.toLowerCase()) {
      match = true;
      break;
    }
  }
  if (match) {
    console.log(substr);
  } else {
    console.log(`${substr} not found!`);
  }
}

solve("javascript", "JavaScript is the best programming language");

solve("python", "JavaScript is the best programming language");
