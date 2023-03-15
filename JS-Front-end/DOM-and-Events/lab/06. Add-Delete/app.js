function addItem() {
    let ulElement = document.getElementById('items');
    let newItem = document.getElementById('newItemText');

    let newLiItem = document.createElement('li');
    newLiItem.textContent = newItem.value;

    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';

    deleteLink.addEventListener('click', (el => {
        el.currentTarget.parentNode.remove();
    }))

    newLiItem.appendChild(deleteLink);
    ulElement.appendChild(newLiItem);
    newItem.value = '';
}