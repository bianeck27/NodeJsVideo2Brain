var http = require('http');
var fs = require('fs');

var porta = 3000;
var server = http.createServer(function (peticion, respuesta) {
    respuesta.writeHead(200, {'Content-Type':'text/html'});
    switch(peticion.url){
        case '/':
            plantilla = "inicio.html";
            break;
        case '/nodejs':
            plantilla = "sobrenode.html";
            break;
        default:
            plantilla = "404.html";
            break;
    }
    fs.readFile("./plantillas/"+plantilla, function (error, datos) {
        respuesta.write(datos);
        respuesta.end();
    });
});

server.listen(porta,'localhost');