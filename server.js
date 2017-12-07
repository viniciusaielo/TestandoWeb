var http = require('http');
var app = require('./config/express')(/* Parênteses vazios aqui */);
var db = require('./config/database');
var passport = require('./config/passport');

passport();

// Conecta-se ao MongoDB, no servidor localhost e
// no banco de dados Indefinido
db('mongodb://localhost/AppGerenciamento');

/* http.createServer(function(req, res) {
   res.writeHead(200, {'Content-Type' : 'text/plain'});
   res.end('Sou um servidor criado pelo Node.js');
}).listen(3000, '127.0.0.1'); */

http.createServer(app).
   listen(app.get('port'), '127.0.0.1', function() {
      console.log('Express Server escutando na porta ' + app.get('port'));
   });