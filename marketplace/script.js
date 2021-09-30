const supportsTemplate = function() {
  return 'content' in document.createElement('template')
}

document.addEventListener('DOMContentLoaded', function() {
  if (supportsTemplate()) {
    let template = document.getElementById('hello')
    console.log(template);
    let content = template.content
    console.log(content);
    document.getElementsByClassName('card-display')[0].appendChild(content.cloneNode(true))
    document.getElementsByClassName('card-display')[0].appendChild(content.cloneNode(true))
    document.getElementsByClassName('card-display')[0].appendChild(content.cloneNode(true))
    document.getElementsByClassName('card-display')[0].appendChild(content.cloneNode(true))
    document.getElementsByClassName('card-display')[0].appendChild(content.cloneNode(true))
    document.getElementsByClassName('card-display')[0].appendChild(content.cloneNode(true))
    document.getElementsByClassName('card-display')[0].appendChild(content.cloneNode(true))
  }
})

var checkboxTemp = document.getElementById('check3')
checkboxTemp.addEventListener('change', function() {
  if (this.checked) {
    console.log('coliin was here');
  }
})

fetch('https://api.lunarcrush.com/v2?data=assets&key=gdqfs8abaucjii0k5tfyve&symbol=BTC,LTC&data_points=2').then(res => res.json())
.then((data) => console.log('data: ' + JSON.stringify(data, null, 2)))

//loading the cards on scroll
//fetch data from api and display on the cards
//style the cards
//filter using checkbox

//card contents: price, name of coin, vo

// BTC, lTC, ETH, DOGE, BNB, ADA, USDT, AXS, UNI
