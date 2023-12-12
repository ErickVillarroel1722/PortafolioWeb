//Funcion para renderizar el index
const renderIndex = (req,res)=>{
    res.render('index')
}

//Funcion para renderizsr el login
const renderAbout = (req,res)=>{
    res.render('login')
}

//Exportar funciones
module.exports ={
    renderIndex, 
    renderAbout
}