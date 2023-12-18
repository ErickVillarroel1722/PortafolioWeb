module.exports.isAuthenticated = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/user/login')
}

//Si el usuario ya está autenticado, redirige a otra página
module.exports.redirectIfAuthenticated = (req, res, next)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/portafolios');
    }
        return next();
}