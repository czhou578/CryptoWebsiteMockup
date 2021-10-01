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
var checkboxes = document.querySelectorAll('input[type=checkbox]')
var rangeArray;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      rangeArray = [rangeArray, ...checkboxTemp.value.match(/\d+/g)]
      console.log(rangeArray)
      console.log(checkboxTemp.value);
      console.log(this.checked);
    }
  })
})


// function showResultsInCard() {
//   var cards = document.getElementsByClassName('resultCard')
//   var cardName = document.getElementsByClassName('card-name')
//   var cardPrice = document.getElementsByClassName('card-price')
//   var cardVolume= document.getElementsByClassName('volume')
//   var cardMktCap = document.getElementsByClassName('market-cap')
//   var cardMaxSupply = document.getElementsByClassName('max-supply')
//   var cardInterval = document.getElementsByClassName('interval-hour')

//   fetch('https://api.lunarcrush.com/v2?data=assets&key=gdqfs8abaucjii0k5tfyve&symbol=BTC,LTC&data_points=2').then(res => res.json())
//   .then((data) => {
//     var coinNames = data.config.symbol.split(',') //get rid of double quotes

//     for (let i = 0; i < coinNames.length; i++) {
//       let textNode = document.createTextNode(coinNames[i].slice(1, -1))
//       cardName[i].appendChild(textNode)

//       let priceNode = document.createTextNode('Price: $' + data.data[i].price.toFixed(2))
//       cardPrice[i].appendChild(priceNode)

//       let volumeNode = document.createTextNode('Volume: ' + data.data[i].volume_24h.toLocaleString())
//       cardVolume[i].appendChild(volumeNode)
      
//       let mktCapNode = document.createTextNode('Market Cap: ' + data.data[i].market_cap.toLocaleString())
//       cardMktCap[i].appendChild(mktCapNode)

//       let supplyNode = document.createTextNode('Supply: ' + parseInt(data.data[i].max_supply).toLocaleString())
//       cardMaxSupply[i].appendChild(supplyNode)

//       let intervalNode = document.createTextNode("Interval: Hourly")
//       cardInterval[i].appendChild(intervalNode)
//     }

//     console.log(JSON.stringify(data, null, 2))
//   })
// }

//filter by dollar sign and the hyphen
//split into array, compare the price with the highest range, if its bigger, then filter it out, otherwise, keep it

//Edge case: 100+, compare with just 100, and if its over, keep it, else, discard


// showResultsInCard()

//loading the cards on scroll
//style the cards
//filter using checkbox


// BTC, lTC, ETH, DOGE, BNB, ADA, USDT, AXS, UNI
