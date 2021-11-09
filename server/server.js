const http = require('http')
const port = 3000;

const server = http.createServer(function (req, response) {
  response.write("Colin is here")
  response.end();
})

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server listening on port ' + port);
  }
})

