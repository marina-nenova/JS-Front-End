function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newitemvalue = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newitemvalue.value;

    let selectelement = document.getElementById('menu');
    selectelement.appendChild(optionElement);

    newItemText.value = '';
    newitemvalue.value = '';
}