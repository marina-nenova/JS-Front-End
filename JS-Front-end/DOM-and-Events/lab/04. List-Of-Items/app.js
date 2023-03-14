function addItem() {
    let ulElement = document.getElementById('items');
    let newItem = document.getElementById('newItemText').value;

    let newLiItem = document.createElement('li');
    newLiItem.textContent = newItem;

    ulElement.appendChild(newLiItem);

}