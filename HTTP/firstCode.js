var http = require('http');
var url = require('url');


//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!'); //write a response to the client

    res.write(req.url);
    console.log(url.parse(req.url, true).query);
    //url = http://localhost:8080/?niyaz=111&hello=2222 ===> output = { niyaz: '111', hello: '2222' }

  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
