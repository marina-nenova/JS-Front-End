// TODO:
function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  let taskTitleInput = document.getElementById("title");
  let taskDescInput = document.getElementById("description");

  let loadBoardBtn = document.getElementById("load-board-btn");
  let addTaskBtn = document.getElementById("create-task-btn");

  let todoSection = document.querySelector("#todo-section .task-list");
  let inProgressSection = document.querySelector(
    "#in-progress-section .task-list"
  );
  let codeReviewSection = document.querySelector(
    "#code-review-section .task-list"
  );
  let doneSection = document.querySelector("#done-section .task-list");

  let sectionMapper = {
    "ToDo": todoSection,
    "In Progress": inProgressSection,
    "Code Review": codeReviewSection,
    "Done": doneSection,
  };

  let buttonTextMapper = {
    "ToDo": "Move to In Progress",
    "In Progress": "Move to Code Review",
    "Code Review": "Move to Done",
    "Done": "Close",
  };


  loadBoardBtn.addEventListener("click", loadBoard);
  addTaskBtn.addEventListener("click", addTask);

  function loadBoard(e) {
    e?.preventDefault();
    todoSection.innerHTML = "";
    inProgressSection.innerHTML = "";
    codeReviewSection.innerHTML = "";
    doneSection.innerHTML = "";

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((result) => {
        allTasks = Object.values(result);
        Object.values(result).forEach((task) => {
          let li = createElement(
            "li",
            sectionMapper[task.status],
            null,
            ["task"],
            task._id
          );
          createElement("h3", li, task.title);
          createElement("p", li, task.description);
          let moveBtn = createElement(
            "button",
            li,
            buttonTextMapper[task.status]
          );

          moveBtn.addEventListener("click", moveTask);
        });
      });
  }

  function addTask(e) {
    e?.preventDefault();

    let title = taskTitleInput.value;
    let description = taskDescInput.value;
    let status = "ToDo";

    let httpHeaders = {
      method: "POST",
      body: JSON.stringify({ title, description, status }),
    };
    if (title.trim() !== "" && description.trim() !== "") {
      fetch(BASE_URL, httpHeaders)
        .then((res) => res.json())
        .then((result) => {
          loadBoard();
        });
    }
    taskTitleInput.value = "";
    taskDescInput.value = "";
  }

  function moveTask(e) {
    let taskid = this.parentNode.id;
    let status = "";
    if (this.textContent === "Move to In Progress") {
      status = "In Progress";
    } else if (this.textContent === "Move to Code Review") {
      status = "Code Review";
    } else if (this.textContent === "Move to Done") {
      status = "Done";
    } else if (this.textContent === "Close") {
      deleteTask(taskid);
      return;
    }

    let httpHeaders = {
      method: "PATCH",
      body: JSON.stringify({ status }),
    };

    fetch(`${BASE_URL}${taskid}`, httpHeaders)
      .then((res) => res.json())
      .then((result) => {
        loadBoard();
      });
  }

  function deleteTask(id) {
    let httpHeaders = {
        method: "DELETE",
      };

      fetch(`${BASE_URL}${id}`, httpHeaders)
      .then((res) => res.json())
      .then((result) => {
        loadBoard();
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
