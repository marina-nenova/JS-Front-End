function loadingBar(number) {
  let percentageNum = number / 10;
  let loading = [];
  for (let index = 0; index < 10; index++) {
    if (index < percentageNum) {
      loading += "%";
    } else {
      loading += ".";
    }
  }
  if (number === 100) {
    console.log("100% Complete!");
  } else {
    console.log(`${number}% [${loading}]`);
    console.log("Still loading...");
  }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
