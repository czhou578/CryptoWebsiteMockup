const supportsTemplate = function() {
  return 'content' in document.createElement('template')
}

document.addEventListener('DOMContentLoaded', function() {
  if (supportsTemplate()) {
    let template = document.getElementById('hello')
    let content = template.content
    var clone;
    for (let i = 0; i < 9; i++) {
      clone = content.cloneNode(true)
      clone.class = 'resultCard'
      document.getElementsByClassName('card-display')[0].appendChild(clone)
    }
  }
})

var checkboxTemp = document.getElementById('check3')
checkboxTemp.addEventListener('change', function() {
  if (this.checked) {
    console.log('coliin was here');
  }
})


function showResultsInCard() {
  console.log(document.getElementsByClassName('resultCard'))
  // var fetchedResults = fetch('https://api.lunarcrush.com/v2?data=assets&key=gdqfs8abaucjii0k5tfyve&symbol=BTC,LTC&data_points=2').then(res => res.json())
  // .then((data) => {
  //   console.log(JSON.stringify(data, null, 2))
  // })
}

showResultsInCard()

//loading the cards on scroll
//fetch data from api and display on the cards
//style the cards
//filter using checkbox

//card contents: price, name of coin, volume, market cap, picture, max supply

// BTC, lTC, ETH, DOGE, BNB, ADA, USDT, AXS, UNI
