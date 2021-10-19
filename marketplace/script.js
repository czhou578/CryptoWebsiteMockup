var cards = document.getElementsByClassName('resultCard')
var cardName = document.getElementsByClassName('card-name')
var cardPrice = document.getElementsByClassName('card-price')
var cardVolume= document.getElementsByClassName('volume')
var cardMktCap = document.getElementsByClassName('market-cap')
var cardMaxSupply = document.getElementsByClassName('max-supply')
var cardInterval = document.getElementsByClassName('interval-hour')
var checkboxes = document.querySelectorAll('input[type=checkbox]')
var numRangeCards;

console.log(checkboxes);

sessionStorage.clear()

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
      sessionStorage.setItem(i, JSON.stringify(cards[i].outerHTML))
    }
  }
})

// document.addEventListener('DOMContentLoaded', handleCoinTypeCheckboxes)

// function handleCoinTypeCheckboxes() {
//   console.log(checkboxes.item(0));
//   if (checkboxes.item(0).checked || checkboxes.item(1).checked) {
//     console.log('colin was here');
//   } else {
    
//   }
// }

document.addEventListener('DOMContentLoaded', handlePriceCheckboxes)

function handlePriceCheckboxes() {
  var rangeArray = [] //array of range objects that were selected
  var resultSetUnique;
  
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
      
      if (this.checked && this.defaultValue != "Bitcoin" && this.defaultValue != "Altcoins") {
        numRangeCards = [...Array(cards.length).keys()] //0...9, all integers between
        sessionStorage.setItem('checkbox', checkbox.value)
        rangeArray.push({low: checkbox.value.match(/\d+/g)[0], high: checkbox.value.match(/\d+/g)[1]})
        rangeArray.sort(function(a, b) {return a-b})
  
        // console.log('range array: ' + JSON.stringify(rangeArray));
        // console.log('market prices: ' + JSON.stringify(allMarketPrices))
        resultSetUnique = new Set()

        for (let i = 0; i < allMarketPrices.length; i++) { //compare every price with all selected price ranges
          for (let j = 0; j < rangeArray.length; j++) {
            if (Object.keys(rangeArray[j]).length == 1 && allMarketPrices[i].price > 100) { //100+
              resultSetUnique.add(allMarketPrices[i].coinNameIndex)
            }
  
            if (allMarketPrices[i].price >= rangeArray[j].low && allMarketPrices[i].price <= rangeArray[j].high) {
              resultSetUnique.add(allMarketPrices[i].coinNameIndex)
            }
          }
        }

        let tempArray = Array.from(resultSetUnique) //create temporary array from set
        let filteredArray = numRangeCards.filter(value => !tempArray.includes(value))

        filteredArray.forEach((elementID) => { //filtered array contings indexes of elements that are not going to be shown
          let tempNode = document.getElementsByClassName('resultCard')[elementID]
          tempNode.style.display = "none"
        })

      } else if (this.checked && this.defaultValue == "Bitcoin") {
        sessionStorage.setItem('checkbox', checkbox.value)

        for (let j in cards) {
          if (j != 0) {
            cards[j].style.display = "none";
          }
        }

      } else if (this.checked && this.defaultValue == "Altcoins") {
        sessionStorage.setItem('checkbox', checkbox.value)

        for (let j in cards) {
          if (j == 0) {
            console.log(cards[j]);
            cards[j].style.display = "none"
          }
        }
      }


    })
  })
}

document.addEventListener('DOMContentLoaded', uncheckedCheckbox)

function uncheckedCheckbox() {

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {

      if (!this.checked && checkbox.value === sessionStorage.getItem('checkbox')) {
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].style.display === 'none') {
            cards[i].style.removeProperty('display')
          }
        }
      }
    })
  })
}

var allMarketPrices = []; //array of all the prices of displayed coins

function showResultsInCard() {

  fetch('https://api.lunarcrush.com/v2?data=assets&key=gdqfs8abaucjii0k5tfyve&symbol=BTC,DOGE,LTC,XRP,ADA,DOT,BNB,SOL,USDC&data_points=2').then(res => res.json())
  .then((data) => {
    var coinNames = data.config.symbol.split(',') //get rid of double quotes
    
    for (let i = 0; i < coinNames.length; i++) {
      allMarketPrices.push({price: data.data[i].price, coinNameIndex: i});

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
