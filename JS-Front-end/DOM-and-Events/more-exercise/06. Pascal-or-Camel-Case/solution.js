function solve() {
  let textInput = document.getElementById('text');
  let namingConvention = document.getElementById('naming-convention');
  let resultElement = document.getElementById('result');
  
  let wordsArr = textInput.value.split(' ').map(x => x.toLowerCase());
  let result = '' 
  
  if(namingConvention.value === 'Camel Case') {
    result = wordsArr[0];
    for (const word of wordsArr.splice(1)) {
      result += word[0].toUpperCase() + word.slice(1);
    }
    console.log(result);
  } else if (namingConvention.value === 'Pascal Case') {
    for (const word of wordsArr) {
      result += word[0].toUpperCase() + word.slice(1);
    }
  } else {
    result = "Error!";
  }

  resultElement.textContent = result;
}