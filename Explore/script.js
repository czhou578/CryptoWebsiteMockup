
const button = document.querySelector("button")
const input = document.querySelector("input")
const form = document.querySelector("form")
const chatBox = document.querySelector(".chat-box")

form.addEventListener('submit', function(e) {
  e.preventDefault()
  const inputValue = input.value.toLowerCase().replace(/[^\w\s\d]/gi, "");

  if (input === "") return;
  output(inputValue)

  input.value = ""
})

function displayMessage(value) {
  const div = document.createElement("div")
  div.classList.add("response")
  div.textContent = value;
  chatBox.append(div)
}

const trigger = [
  ["hi", "hello", "hey"]
  ["bitcoin!", "btc!", "BTC!", "Bitcoin!"],
  ["ethereum!", "eth!", "ETH!", "Ethereum!"],
  // ["ethereum!", "eth!", "ETH!", "Ethereum!"],
  // ["ethereum!", "eth!", "ETH!", "Ethereum!"],
  // ["ethereum!", "eth!", "ETH!", "Ethereum!"],
  // ["ethereum!", "eth!", "ETH!", "Ethereum!"],
  // ["ethereum!", "eth!", "ETH!", "Ethereum!"],
]

const reply = [
  ["hi", "hello", "hey!"],
  ["Here is the price chart of Bitcoin", "BTC's price is: ", "BTC is currently trading at: "],
  ["Here is the price chart of Ethereum", "ETH's price is: ", "ETH is currently trading at: "]
]

function compareArray(trigger, reply, text) {
  let botReply;
  let replyFound = false;

  for (let i = 0; i < trigger.length; i++) {
    for (let j = 0; j < reply.length; j++) {
      if (trigger[i][j] == text) {
        let replies = reply[i]
        botReply = Math.floor(Math.random() * replies.length)
        replyFound = true;
      }
    }

    if (replyFound) break;
  }

  return botReply;
}

function output(input) {
  var output;

  if (compareArray(trigger, reply, input)) {
    output = compareArray(trigger, reply, input)
  } else {
    output = "Didn't work; Try another command. "
  }

  displayMessage(output)
}

