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
  var cards = document.getElementsByClassName('resultCard')
  var cardName = document.getElementsByClassName('card-name')
  var cardPrice = document.getElementsByClassName('card-price')
  var cardVolume= document.getElementsByClassName('volume')
  var cardMktCap = document.getElementsByClassName('market-cap')
  var cardMaxSupply = document.getElementsByClassName('max-supply')
  var cardInterval = document.getElementsByClassName('interval-hour')

  fetch('https://api.lunarcrush.com/v2?data=assets&key=gdqfs8abaucjii0k5tfyve&symbol=BTC,LTC&data_points=2').then(res => res.json())
  .then((data) => {
    var coinNames = data.config.symbol.split(',') //get rid of double quotes

    for (let i = 0; i < coinNames.length; i++) {
      let textNode = document.createTextNode(coinNames[i].slice(1, -1))
      cardName[i].appendChild(textNode)

      let priceNode = document.createTextNode('Price: $' + data.data[i].price)
      cardPrice[i].appendChild(priceNode)

      let volumeNode = document.createTextNode('Volume: ' + data.data[i].volume_24h)
      cardVolume[i].appendChild(volumeNode)
      
      let mktCapNode = document.createTextNode('Market Cap: ' + data.data[i].market_cap)
      cardMktCap[i].appendChild(mktCapNode)

      let supplyNode = document.createTextNode('Supply: ' + data.data[i].max_supply)
      cardMaxSupply[i].appendChild(supplyNode)

      let intervalNode = document.createTextNode("Interval: Hourly")
      cardInterval[i].appendChild(intervalNode)
    }

    console.log(JSON.stringify(data, null, 2))
  })
}

showResultsInCard()

//loading the cards on scroll
//fetch data from api and display on the cards
//style the cards
//filter using checkbox

//card contents: price, name of coin, volume, market cap, picture, max supply, interval (hour)
//2x2 grid showing information

// BTC, lTC, ETH, DOGE, BNB, ADA, USDT, AXS, UNI
