/*premessa: fatto con l'aiuto della soluzione */
/*prendo l'url e lo metto in una costante*/
const urlBO = "https://striveschool-api.herokuapp.com/api/product/";

let param = new URLSearchParams(window.location.search);
let id = param.get("id");
window.onload = async () => {
  if (id) {
    const res = await fetch(urlBO + id, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjYjk1MTgxODQ0MjAwMTUzNzU3M2UiLCJpYXQiOjE3MTUyNTU2MzMsImV4cCI6MTcxNjQ2NTIzM30.cb4jeN3zeqjceBFiZDQvSLMQVurUuD5WN4FSCq8FP6w",
      },
    });
    /*creo una costante che contenga un oggetto a cui assegno i valori che prendo dagli input*/
    const product = await res.json();
    document.querySelector("#name").value = product.name;
    document.querySelector("#description").value = product.description;
    document.querySelector("#imageUrl").value = product.imageUrl;
    document.querySelector("#brand").value = product.brand;
    document.querySelector("#price").value = product.price;
    document.querySelector(".btn-success").remove();
  } else {
    document.querySelector(".btn-danger").remove();
    document.querySelector(".btn-secondary").remove();
  }
};
/*creo la funzione che agggiunge i nuovi prodotti*/
const createNew = async () => {
  const product = {
    /*prendo i valori degli input della pagina*/
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  };
  /*li invio al server*/
  let res = await fetch(urlBO, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjYjk1MTgxODQ0MjAwMTUzNzU3M2UiLCJpYXQiOjE3MTUyNTU2MzMsImV4cCI6MTcxNjQ2NTIzM30.cb4jeN3zeqjceBFiZDQvSLMQVurUuD5WN4FSCq8FP6w",
    },
    body: JSON.stringify(product),
  });
  /*se la risposta è positiva allora fa un alert con l'ok*/
  if (res.ok) {
    alert("Product created");
  }
};
/*creo una funzione per modificare il prodotto*/
const editProduct = async () => {
  const product = {
    /*ne prendo i valori dalla pagina*/
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  };
  let res = await fetch(urlBO + id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjYjk1MTgxODQ0MjAwMTUzNzU3M2UiLCJpYXQiOjE3MTUyNTU2MzMsImV4cCI6MTcxNjQ2NTIzM30.cb4jeN3zeqjceBFiZDQvSLMQVurUuD5WN4FSCq8FP6w",
    },
    body: JSON.stringify(product),
  });
  if (res.ok) {
    console.log(res);
    alert("Product created");
  }
};
/*creo una funzione per cancellare un prodotto prendendo il valore dell'id*/
const deleteProduct = async () => {
  let res = await fetch(urlBO + id, {
    method: "DELETE",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjYjk1MTgxODQ0MjAwMTUzNzU3M2UiLCJpYXQiOjE3MTUyNTU2MzMsImV4cCI6MTcxNjQ2NTIzM30.cb4jeN3zeqjceBFiZDQvSLMQVurUuD5WN4FSCq8FP6w",
    },
  });
  if (res.ok) {
    alert("Product deleted");
  }
};
