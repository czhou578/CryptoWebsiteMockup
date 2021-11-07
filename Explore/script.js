const button = document.querySelector("button")
const input = document.querySelector("input")
const form = document.querySelector("form")

form.addEventListener('submit', function(e) {
  e.preventDefault()
  const inputValue = input.value;

  if (input === "") return;

  displayMessage(inputValue)

  input.value = ""
})

function displayMessage() {
  const div = document.createElement("div")
  div.textContent = inputValue;
  
}