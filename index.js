const express = require('express');
const app = express();

/*

Verbos HTTP
GET: Para obtener un recurso
POST: Para crear un recurso
PUT: Para actualizar un recurso
DELETE: Para eliminar un recurso
PATCH: Para actualizar parcialmente un recurso
HEAD: Para obtener los encabezados de un recurso
OPTIONS: Para describir las opciones de comunicación
 para el recurso de destino


*/

app.get("/",(req, res, next) =>{
    res.status(200);
    res.send("Bienvenido");
})
app.listen(3000, () =>{
    console.log('Server is running on port 3000');

})