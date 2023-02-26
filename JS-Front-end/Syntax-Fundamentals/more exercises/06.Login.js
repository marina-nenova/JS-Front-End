function solve(arr) {
  let username = arr.shift();
  let attempts = 0;

  for (const password of arr) {
    let reversedPass = password.split("").reverse().join("");
    attempts++;
    if (reversedPass === username) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      if (attempts >= 4) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    }
  }
}

solve(["Acer", "login", "go", "let me in", "recA"]);
solve(["momo", "omom"]);
solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
