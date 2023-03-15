function addItem() {
    let ulElement = document.getElementById('items');
    let newItem = document.getElementById('newItemText');

    let newLiItem = document.createElement('li');
    newLiItem.textContent = newItem.value;

    ulElement.appendChild(newLiItem);
    newItem.value = '';

}