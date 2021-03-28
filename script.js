const enterButton = document.querySelector("#enter-btn")
const inputFields = document.getElementsByTagName("input")
const formHolder = document.querySelector(".form-holder")

enterButton.addEventListener('click', function() {
  for (let field of inputFields) {
    field.value = ''
  }

  formHolder.removeChild(enterButton)
  formHolder.appendChild("")
})