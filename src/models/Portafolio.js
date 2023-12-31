//Importar el Esquema y el modelo//

const {Schema, model} = require('mongoose')

//CREAR EL NUEVO ESQUEMA
const portfolioSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    },
    user:{
        type:String,
        required:true},
    image:{
            public_id:String,
            secure_url:String
    }

},{
    timestamps:true
})

//Exportar el modelo 
module.exports = model('portfolio',portfolioSchema)