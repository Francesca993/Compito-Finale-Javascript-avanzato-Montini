/*prendo l'url e lo metto in una costante */
const indexURL = "https://striveschool-api.herokuapp.com/api/product/";
/*facio la fetch al caricamento della pagina */
window.onload = async () => {
  const res = await fetch(indexURL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjYjk1MTgxODQ0MjAwMTUzNzU3M2UiLCJpYXQiOjE3MTUyNTU2MzMsImV4cCI6MTcxNjQ2NTIzM30.cb4jeN3zeqjceBFiZDQvSLMQVurUuD5WN4FSCq8FP6w",
    },
  });
  /*prendo la risposta e la converto in json linguaggio javascript */
  const products = await res.json();
  const row = document.querySelector("#products");
  /*scorro l'array e per ogni prodotto vado a stamparlo nella pagina*/
  products.forEach((prod) => {
    row.innerHTML += `
    <div class='col col-3 col-lg-3 col-md-4 col-sm-6 col-sm-12 mb-4 text-white'>
                        <div class="card justify-content-between bg-black text-white cardstile">
                            <img src="${prod.imageUrl}" class="imgstile card-img-top" alt="${prod._id}_${prod.name}">
                            <div class="card-body text-white">
                                <h4 class="card-title text-white">${prod.name}</h5>
                                <h5>${prod.price}€</h4>
                                <a href="./backoffice.html?id=${prod._id}" class="btn btn-dark">Details</a>
                            </div>
                        </div>
                    </div>`;
  });
};
