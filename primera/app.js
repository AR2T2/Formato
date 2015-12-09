var express = require('express');
//var jade = require('jade');

var app = express();

app.set("view engine","jade");
app.get("/",function(solicitud,respuesta){
 //respuesta.send("mi primera pagina");
 respuesta.render("index");
});

app.listen(8081);