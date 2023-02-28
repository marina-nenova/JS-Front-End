function palindromeInt(numArr) {
  for (const num of numArr) {
    let numAsArr = num.toString().split("");
    let isPalindrome = true;
    while (numAsArr.length > 1) {
      let firstDigit = numAsArr.shift();
      let lastDigit = numAsArr.pop();
      if (firstDigit !== lastDigit) {
        isPalindrome = false;
        break;
      }
    }
    console.log(isPalindrome);
  }
}

// palindromeInt([123,323,421,121]);
palindromeInt([32, 2, 232, 1010]);
