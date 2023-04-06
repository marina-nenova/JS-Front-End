function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

  let inputElement = document.getElementById("title");
  let addBtn = document.getElementById("add-button");
  let loadBtn = document.getElementById("load-button");
  let todoList = document.getElementById("todo-list");

  loadBtn.addEventListener("click", loadTasks);
  addBtn.addEventListener("click", addTask);

  function loadTasks(e) {
    e?.preventDefault();

    todoList.innerHTML = '';
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((result) => {
        Object.values(result).forEach((task) => {
          let li = createElement("li", todoList);
          li.id = task._id;
          createElement("span", li, task.name);
          let removeBtn = createElement("button", li, "Remove");
          let editBtn = createElement("button", li, "Edit");

          editBtn.addEventListener('click', loadEditForm);
          removeBtn.addEventListener('click', removeTask);
        });
      });
  }

  function addTask(e) {
    e.preventDefault();
    let name = inputElement.value;

    if (name.trim() !== "") {
      httpHeaders = {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name }),
      };

      fetch(BASE_URL, httpHeaders)
        .then((res) => res.json())
        .then(() => {
          inputElement.value = "";
          loadTasks();
        });
    }
  }

  function loadEditForm(e) {
    let liElement = e.currentTarget.parentNode;
    let [span, _removeBtn, editBtn] = Array.from(liElement.children);
    
    const editInput = createElement('input', null, span.textContent);
    liElement.prepend(editInput);

    const submitBtn = createElement('button', liElement, 'Submit');
    submitBtn.addEventListener('click', editTask)

    span.remove();
    editBtn.remove();

  }

  function editTask(e) {
    e.preventDefault();
    let liParent = e.currentTarget.parentNode;
    let id = liParent.id;
    let [input] = Array.from(liParent.children);

    let name = input.value;

    if (name.trim() !== "") {
      httpHeaders = {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name }),
      };

      fetch(`${BASE_URL}${id}`, httpHeaders)
        .then((res) => res.json())
        .then(() => {
          loadTasks();
        });
    }

  }

  function removeTask(e) {
    e.preventDefault();
    let liParent = e.currentTarget.parentNode;
    let id = liParent.id;

    httpHeaders = {
        method: "delete",
        };

      fetch(`${BASE_URL}${id}`, httpHeaders)
        .then((res) => res.json())
        .then(() => {
          loadTasks();
        });
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

attachEvents();
