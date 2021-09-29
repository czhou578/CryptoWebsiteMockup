const supportsTemplate = function() {
  return 'content' in document.createElement('template')
}

document.addEventListener('DOMContentLoaded', function() {
  if (supportsTemplate()) {
    let template = document.getElementById('hello')
    console.log(template);
    let content = template.content
    console.log(content);
    document.getElementsByClassName('card-display')[0].appendChild(content)
  }
})