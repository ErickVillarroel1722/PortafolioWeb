const{Router} = require('express')
const { renderPortafolioForm, createNewPortafolio, renderAllPortafolios, renderPortafolio, renderEditPortafolioForm, updatePortafolio, deletePortafolio } = require('../controllers/portafolio.controllers')

const router = Router()


//Formulario new portafolio
router.get('/portafolio/add', renderPortafolioForm)
router.post('/portafolio/add', createNewPortafolio)

//Renderiza todos los portafolios 
router.get('/portafolios', renderAllPortafolios)
router.get('/portafolio/:id', renderPortafolio)

router.get('/portafolio/edit/:id', renderEditPortafolioForm)
router.put('/portafolio/edit/:id', updatePortafolio)

router.delete('/portafolio/delete/:id', deletePortafolio)

module.exports = router
//RUTAS PROTEGIDAS
const {isAuthenticated} = require('../helpers/validate-auth')



router.get('/portafolio/add',isAuthenticated,renderPortafolioForm)
router.post('/portafolio/add', isAuthenticated,createNewPortafolio)

router.get('/portafolios',isAuthenticated,renderAllPortafolios)
router.get('/portafolio/:id', isAuthenticated,renderPortafolio)
    
router.get('/portafolio/edit/:id', isAuthenticated,renderEditPortafolioForm)
router.put('/portafolio/edit/:id', isAuthenticated,updatePortafolio)

router.delete('/portafolio/delete/:id', isAuthenticated,deletePortafolio)
