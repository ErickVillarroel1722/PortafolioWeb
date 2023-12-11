
const mongoose = require('mongoose')
//CADENA DE CONEXION A LA BDD

//const MONGODB_URI = 'mongodb+srv://byrontosh:sistemas@cluster0.6e8zntc.mongodb.net/test'
const MONGODB_URI = 'mongodb://localhost:27017'

//GENERAR UN METODO PARA HACER CADENA DE CONEXION

connection = async()=>{
    try {
         await mongoose.connect(MONGODB_URI)
        console.log("Database is connected")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection