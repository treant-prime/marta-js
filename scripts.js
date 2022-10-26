let getBitcoinPrice = () => {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json') // literalnie nasze api lmao
  .then(response => response.json())
  .then(data => {
    renderInHtml(data)
    console.log(data)
  })
  .catch(error => console.error(error))
}

let renderInHtml = (data) => {
  let price = data.bpi.USD.rate_float
  let displayDiv = document.getElementById('price')
  displayDiv.innerHTML = `${price} USD`
}
