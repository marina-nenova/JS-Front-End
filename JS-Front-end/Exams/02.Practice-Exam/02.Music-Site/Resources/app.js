window.addEventListener('load', solve);

function solve() {
    let genreInput = document.getElementById('genre');
    let nameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');

    let likesElement = document.querySelector('.likes > p');

    let hitsContainer = document.querySelector('div.all-hits-container');
    let savedContainer = document.querySelector('div.saved-container');
    let addBtn = document.getElementById('add-btn');


    addBtn.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();
        let genre = genreInput.value.trim();
        let name = nameInput.value.trim();
        let author = authorInput.value.trim();
        let date = dateInput.value.trim();

        if (genre !== '' && name !== '' && author !== '' && date !== '') {

            let hitsInfo = createElement('div', hitsContainer, null, ['hits-info']);
            createElement('img', hitsInfo, null, null, null, {'src': './static/img/img.png'});
            createElement('h2', hitsInfo, `Genre: ${genre}`);
            createElement('h2', hitsInfo, `Name: ${name}`);
            createElement('h2', hitsInfo, `Author: ${author}`);
            createElement('h3', hitsInfo, `Date: ${date}`);
            let saveBtn = createElement('button', hitsInfo, 'Save song', ['save-btn']);
            let likeBtn = createElement('button', hitsInfo, 'Like song', ['like-btn']);
            let deleteBtn = createElement('button', hitsInfo, 'Delete', ['delete-btn']);
            
            likeBtn.addEventListener('click', changeLikes);
            saveBtn.addEventListener('click', saveSong);
            deleteBtn.addEventListener('click', deleteSong);

            genreInput.value = '';
            nameInput.value = '';
            authorInput.value = '';
            dateInput.value = '';

        }
    }

    function changeLikes(e) {
        let [text, likesString] = likesElement.textContent.split(': ');
        let likes = Number(likesString) + 1;
        likesElement.textContent = `${text}: ${likes}`;

        e.currentTarget.disabled = true;

    }

    function saveSong(e) {
        let parentDiv = e.currentTarget.parentNode;
        
        let saveBtn = parentDiv.querySelector('.save-btn');
        let likeBtn = parentDiv.querySelector('.like-btn');

        parentDiv.removeChild(saveBtn);
        parentDiv.removeChild(likeBtn);

        hitsContainer.removeChild(parentDiv);
        savedContainer.appendChild(parentDiv);
            
    }

    function deleteSong(e) {
        let divElement = e.currentTarget.parentNode;
        let parentDiv = divElement.parentNode;

        parentDiv.removeChild(divElement);
    }

    function createElement(
        type,
        parentNode,
        content,
        classes,
        id,
        attributes,
        useInnerHtml
      ) {
        const htmlElement = document.createElement(type);
    
        if (content && useInnerHtml) {
          htmlElement.innerHTML = content;
        } else {
          if (content && type !== "input") {
            htmlElement.textContent = content;
          }
          if (content && type === "input") {
            htmlElement.value = content;
          }
        }
    
        if (classes && classes.length > 0) {
          htmlElement.classList.add(...classes);
        }
    
        if (id) {
          htmlElement.id = id;
        }
    
        if (attributes) {
          for (const key in attributes) {
            htmlElement[key] = attributes[key];
          }
        }
    
        if (parentNode) {
          parentNode.appendChild(htmlElement);
        }
    
        return htmlElement;
      }
}