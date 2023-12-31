//Esto corre el server UWU 
require('dotenv').config()


//Importar la variable app
const app = require('./server.js')
//Importar el metodo conection/
const connection = require('./database.js')

//EJECUTAR EL METODO//
connection()

//Ejecutar el server en el puerto 3000
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})