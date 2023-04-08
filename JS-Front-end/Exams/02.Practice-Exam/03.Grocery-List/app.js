function solve() {
  const BASE_URL = "http://localhost:3030/jsonstore/grocery/";

  let inputFields = Array.from(document.querySelectorAll("input"));

  let tableBody = document.getElementById("tbody");

  let addBtn = document.getElementById("add-product");
  let updateBtn = document.getElementById("update-product");
  let loadBtn = document.getElementById("load-product");

  addBtn.addEventListener("click", addProduct);
  updateBtn.addEventListener("click", updateProduct);
  loadBtn.addEventListener("click", loadProducts);

  let allProducts = [];
  let productToEdit = {};

  function loadProducts(e) {
    e?.preventDefault();
    tableBody.innerHTML = "";

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((result) => {
        allProducts = Object.values(result);
        Object.values(result).forEach((product) => {
          let row = createElement("tr", tableBody,null, null, product._id);
          createElement("td", row, product.product, ["name"]);
          createElement("td", row, product.count, ["count-product"]);
          createElement("td", row, product.price, ["product-price"]);
          let buttonsCol = createElement("td", row, null, ["btn"]);
          let updateFormBtn = createElement(
            "button",
            buttonsCol,
            "Update",
            ["update"],
          );
          let deleteBtn = createElement(
            "button",
            buttonsCol,
            "Delete",
            ["delete"],
          );

          deleteBtn.addEventListener("click", deleteProduct);
          updateFormBtn.addEventListener("click", loadUpdateForm);
        });
      });
  }

  function addProduct(e) {
    e?.preventDefault();

    const allFormInputs = inputFields.every(
      (input) => input.value.trim() !== ""
    );

    if (allFormInputs) {
      let [product, count, price] = inputFields.map((input) => input.value);
      let newProduct = { product, count, price };
      console.log(newProduct);

      let httpHeaders = { method: "POST", body: JSON.stringify(newProduct) };

      fetch(BASE_URL, httpHeaders)
        .then((res) => res.json())
        .then((result) => {
          loadProducts();
          inputFields.forEach((input) => (input.value = ""));
        });
    }
  }

  function deleteProduct(e) {
    let id = this.parentNode.parentNode.id;
    fetch(`${BASE_URL}${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((result) => {
        loadProducts();
      });
  }

  function loadUpdateForm(e) {
    let id = this.parentNode.parentNode.id;
    productToEdit = allProducts.find((p) => p._id === id);

    let [productField, countField, priceField] = inputFields;
    productField.value = productToEdit.product;
    countField.value = productToEdit.count;
    priceField.value = productToEdit.price;

    updateBtn.disabled = false;
    addBtn.disabled = true;
    
  }

  function updateProduct(e) {
    e?.preventDefault()
    let id = productToEdit._id;

    let [productFIeld, countField, priceField] = inputFields;
    let product = productFIeld.value;
    let count = countField.value;
    let price = priceField.value;
    let updatedProduct = { product, count, price };

    let httpHeaders = { method: "PATCH", body: JSON.stringify(updatedProduct) };

    fetch(`${BASE_URL}${id}`, httpHeaders)
      .then((res) => res.json())
      .then((result) => {
        loadProducts();
        inputFields.forEach((input) => (input.value = ""));
        updateBtn.disabled = true;
        addBtn.disabled = false;
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

solve();
