var mysql = require('mysql');
var http = require('http');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Niyaz12345,",
  database: "mydb"
});

con.connect(function(err) {
    if (err) 
        throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) 
        throw err;
      console.log(fields);
      setServerData(result);
    });
});

  //create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
  
    res.write(`
        <table>  
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
    `);
    getServerData().forEach(element => {
    res.write(`<tr><td>${element["id"]}</td><td>${element["name"]}</td><td>${element["address"]}</td></tr>`);
    });
    res.write("</tbody></table>");

    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


var serverData={};

function setServerData(data){
    serverData=data;
}


function getServerData(){
    return serverData;
}