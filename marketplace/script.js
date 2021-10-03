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
var rangeArray = [] //array of range objects
var results = []

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    
    if (this.checked) {

      // rangeArray = rangeArray.concat(checkbox.value.match(/\d+/g))
      rangeArray.push({"low": checkbox.value.match(/\d+/g)[0], "high": checkbox.value.match(/\d+/g)[1]})
      rangeArray.sort(function(a, b) {return a-b})

      console.log('range array: ' + JSON.stringify(rangeArray));
      // console.log('market prices: ' + allMarketPrices)
      console.log('filtered: ' + allMarketPrices.filter(filterPrice));
      results.concat(allMarketPrices.filter(filterPrice))
      console.log(results);
    }
  })
})

function filterPrice(price) {
  var did100 = false;
  var inRange = false;
  var lowerBound;
  var upperBound;

  console.log(rangeArray);

  rangeArray.forEach((object) => {
    if (object.low == 100) {
      console.log(object.low);
      did100 = true;
    }

    if (object.high >= price && object.low <= price) {
      inRange = true;
      lowerBound = object.low;
      upperBound = object.high
      // return price >= object.low && price <= object.high;      // result.push(price)
    } else {
      //delete
    }
  })

  if (did100 == true) return price > 100
  if (inRange == true) return 
}

var allMarketPrices = []; //array of all the prices of displayed coins

function showResultsInCard() {
  var cards = document.getElementsByClassName('resultCard')
  var cardName = document.getElementsByClassName('card-name')
  var cardPrice = document.getElementsByClassName('card-price')
  var cardVolume= document.getElementsByClassName('volume')
  var cardMktCap = document.getElementsByClassName('market-cap')
  var cardMaxSupply = document.getElementsByClassName('max-supply')
  var cardInterval = document.getElementsByClassName('interval-hour')

  fetch('https://api.lunarcrush.com/v2?data=assets&key=gdqfs8abaucjii0k5tfyve&symbol=BTC,DOGE,LTC&data_points=2').then(res => res.json())
  .then((data) => {
    var coinNames = data.config.symbol.split(',') //get rid of double quotes
    
    for (let i = 0; i < coinNames.length; i++) {
      allMarketPrices.push(data.data[i].price)

      let textNode = document.createTextNode(coinNames[i].slice(1, -1))
      cardName[i].appendChild(textNode)

      let priceNode = document.createTextNode('Price: $' + data.data[i].price.toFixed(2))
      cardPrice[i].appendChild(priceNode)

      let volumeNode = document.createTextNode('Volume: ' + data.data[i].volume_24h.toLocaleString())
      cardVolume[i].appendChild(volumeNode)
      
      let mktCapNode = document.createTextNode('Market Cap: ' + data.data[i].market_cap.toLocaleString())
      cardMktCap[i].appendChild(mktCapNode)

      let supplyNode = document.createTextNode('Supply: ' + parseInt(data.data[i].max_supply).toLocaleString())
      cardMaxSupply[i].appendChild(supplyNode)

      let intervalNode = document.createTextNode("Interval: Hourly")
      cardInterval[i].appendChild(intervalNode)
    }

    console.log(JSON.stringify(data, null, 2))
  })
}

//Edge case: 100+, compare with just 100, and if its over, keep it, else, discard


showResultsInCard()

//loading the cards on scroll
//style the cards


// BTC, lTC, ETH, DOGE, BNB, ADA, USDT, AXS, UNI
