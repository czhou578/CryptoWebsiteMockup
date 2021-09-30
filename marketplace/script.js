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

//loading the cards on scroll
//fetch data from api and display on the cards
//style the cards
//filter using checkbox
