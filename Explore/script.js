const button = document.querySelector("button")
const input = document.querySelector("input")
const form = document.querySelector("form")
const chatBox = document.querySelector(".chat-box")

form.addEventListener('submit', function(e) {
  e.preventDefault()
  const inputValue = input.value;

  if (input === "") return;

  displayMessage(inputValue)

  input.value = ""
})

function displayMessage(value) {
  const div = document.createElement("div")
  div.classList.add("response")
  div.textContent = value;
  chatBox.append(div)
}