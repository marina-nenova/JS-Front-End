function solve(text) {
  let textArr = text.split(" ");
  let special = [];
  for (const word of textArr) {
    if (word.startsWith("#") && word.length > 1) {
      let trimmedword = word.substring(1);
      if (/^[a-z]+$/i.test(trimmedword)) {
        special.push(trimmedword);
      }
    }
  }
  console.log(special.join("\n"));
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
solve(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
