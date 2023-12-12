const express = require('express')
const path = require('path');
const { engine }  = require('express-handlebars')
const methodOverride = require('method-override');



// Inicializaciones
const app = express()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(methodOverride('_method'))

//Configuraciones extras//

app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs' 
}))
app.set('view engine','.hbs')




app.set('views',path.join(__dirname, 'views'))

// Middlewares 
//server va a trabajar con info en base a formularios

app.use(express.urlencoded({extended:false}))


// Variables globales


// Rutas 
app.use(require('./routers/index.routes'))
app.use(require('./routers/portafolio.routes'))

// Rutas Alterna

// Archivos estáticos
//Definir archivos estaticos y publicos
app.use(express.static(path.join(__dirname,'public')))

//exportar la variable app
module.exports = app