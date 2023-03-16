function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rowsElements = Array.from(document.querySelectorAll('.container > tbody tr'));
      let searchedInput = document.getElementById('searchField');

      for (const element of rowsElements) {
         element.classList.remove('select')
         if (searchedInput.value && element.textContent.toLowerCase().includes(searchedInput.value.toLowerCase())) {
            element.className = 'select';
         }
      }
      searchedInput.value = '';
   }
}