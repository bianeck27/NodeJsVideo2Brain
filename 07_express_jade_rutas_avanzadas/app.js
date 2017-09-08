var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname,+'/public'));

var camisetasDados = [
	{titulo:"Naranja",imagen:"images/camiseta1.png"},
    {titulo:"Roja",imagen:"images/camiseta2.png"},
    {titulo:"Azul",imagen:"images/camiseta3.png"},
    {titulo:"Verde",imagen:"images/camiseta4.png"}
]

app.get('/', function (peticion, respuesta) {
	respuesta.render('index.jade');
});
app.get('/tienda', function (peticion, respuesta) {
    respuesta.render('tienda.jade',
		{
			titulo:"Tienda de Camisetas",
			camisetas : camisetasDados
		}
		);
});

app.get('/tienda/comprar/:camiseta', function (peticion, respuesta) {
	var obj = camisetasDados.filter(function (obj) {
		if(peticion.params.camiseta == obj.titulo){
			respuesta.render('compra.jade',obj);
		}
    })[0];
});

app.listen(3000, function () {
	console.log("escuchando puerto 3000 - 07_express_jade_rutas_avanzadas");
});
