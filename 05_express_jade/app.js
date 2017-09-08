var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', function (peticion, respuesta) {
    respuesta.render('index.jade',
        {
            titulo:"Tienda de frutas",
            fruta:"Mango",
            imagen:"camiseta3.png"
        }
    );
});

app.listen(3000, function () {
   console.log("escuchando puerto 3000 - 05_express_jade");
});

