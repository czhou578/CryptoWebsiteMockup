const enterButton = document.querySelector("#enter-btn")
const inputFields = document.getElementsByTagName("input")
const formHolder = document.querySelector(".form-holder")
const moreSec = document.querySelector(".more")

enterButton.addEventListener('click', function() {
  for (let field of inputFields) {
    field.value = ''
  }

  
  let loadBar = document.createElement("DIV")
  loadBar.classList.add("w3-green")
  loadBar.style.width = "80%"
  loadBar.style.height = "24px"
  loadBar.style.marginTop = "50px"
  loadBar.style.border = "2px solid blue"
  formHolder.replaceChild(loadBar, enterButton)
  
  progress();
 
})

function progress() {
  var element = document.querySelector('.w3-green')
  var width = 1
  
  var setFrame = setInterval(frame, 10)
  function frame() {
    if (width >= 100) {
      clearInterval(setFrame)
      let confirm = document.createElement("h3")
      confirm.textContent = "Confirmed. Please check your email."
      formHolder.appendChild(confirm)
      confirm.style.fontSize = '25px'
      confirm.style.fontWeight = "500"
      confirm.style.fontFamily = 'Open Sans'
      confirm.style.margin = '20px 0px 0px 100px'
    } else {
      width++
      element.style.width = width + '%'
    }
  }
}