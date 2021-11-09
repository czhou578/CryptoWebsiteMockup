
const button = document.querySelector("button")
const input = document.querySelector("input")
const form = document.querySelector("form")
const chatBox = document.querySelector(".chat-box")
const chartBox = document.querySelector(".chart")

function returnChart() {
  var addDiv = document.createElement('div')
  var chart = new TradingView.widget(
    {
    "width": 1180,
    "height": 480,
    "symbol": "BINANCE:BTCUSDT",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "tradingview_0c572"
    }
  )

  addDiv.append(chart)
  chartBox.appendChild(addDiv)
}

returnChart()

form.addEventListener('submit', function(e) {
  const emptyString = "^\\s+$";
  e.preventDefault()
  const inputValue = input.value.toLowerCase().replace(/[^\w\s\d]/gi, "");

  if (emptyString.test(inputValue)) return;
  displayMessage(inputValue)
  output(inputValue)

  input.value = ""
})

function displayMessage(value) {
  const div = document.createElement("div")
  div.classList.add("response")
  div.textContent = value;
  chatBox.append(div)
}

const triggerList = [
  ["hi", "hello", "hey"],
  ["bitcoin", "btc", "BTC", "Bitcoin"],
  ["ethereum", "eth", "ETH", "Ethereum"],
  // ["ethereum!", "eth!", "ETH!", "Ethereum!"],
  // ["ethereum!", "eth!", "ETH!", "Ethereum!"],
  // ["ethereum!", "eth!", "ETH!", "Ethereum!"],
  // ["ethereum!", "eth!", "ETH!", "Ethereum!"],
  // ["ethereum!", "eth!", "ETH!", "Ethereum!"],
]

const replyList = [
  ["hi", "hello", "hey!"],
  ["Here is the price chart of Bitcoin", "BTC's price is: ", "BTC is currently trading at: "],
  ["Here is the price chart of Ethereum", "ETH's price is: ", "ETH is currently trading at: "]
]

function compareArray(trigger, reply, text) {
  let botReply;
  let replyFound = false;

  for (let i = 0; i < trigger.length; i++) {
    for (let j = 0; j < reply.length; j++) {
      if (trigger[i][j] === text) {
        let replies = reply[i]
        botReply = replies[Math.floor(Math.random() * replies.length)]
        replyFound = true;
      }
    }

    if (replyFound) break;
  }

  return botReply;
}

function output(input) {
  var output;

  if (compareArray(triggerList, replyList, input)) {
    output = compareArray(triggerList, replyList, input)
  } else {
    output = "Didn't work; Try another command. "
  }

  displayMessage(output)
}

