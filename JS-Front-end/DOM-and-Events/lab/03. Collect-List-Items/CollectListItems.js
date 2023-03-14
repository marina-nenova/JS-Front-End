function extractText() {
    let items = document.getElementsByTagName('li');
    let resultElement = document.getElementById('result')
    let itemsArr = Array.from(items);

    resultElement.value = itemsArr.map((e) => e.textContent).join('\n');

}