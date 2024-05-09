const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/"

window.onload = async () => {
  const res = await fetch(BASE_URL, {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM3Zjc1YWM1Y2I2MjAwMTQzMDQ2MzgiLCJpYXQiOjE2ODEzODk0MDMsImV4cCI6MTY4MjU5OTAwM30.X8vcNHscCwbf38F9v8N9dADkt0E19x7HstOxfVfPIDg",
    },
  })
  const products = await res.json()
  const row = document.querySelector("#products")
  products.forEach((prod) => {
    row.innerHTML += `
    <div class='col col-3 col-lg-3 col-md-4 col-sm-6 col-sm-12 mb-4'>  
      <div class="card justify-content-between">
        <img src="${prod.imageUrl}" class="card-img-top" alt="${prod._id}_${prod.name}">
        <div class="card-body">
          <h5 class="card-title">${prod.name}</h5>
          <a href="./backoffice.html?id=${prod._id}" class="btn btn-primary">Details</a>
        </div>
      </div> 
    </div>`
  })
}
