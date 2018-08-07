var http = require('http');


var dt = require('./firstModule'); //call all methodes


//const {sum,mul} = require('./firstModule'); // call specific method must be function name the same
//res.write("<h3>" + sum(5,5)+"<h3>");



http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h3>" + dt.test1(5,5)+"<h3>");
    res.write("<h3>" + dt.test3(5,5)+"<h3>");

    //res.write("<h3>" + dt.niyaz1+"<h3>");
    //res.write("<h3>" + dt.niyaz2+"<h3>");

    res.end();
}).listen(8080);
