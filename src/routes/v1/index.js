const express = require('express') ;
const cityController = require('../../controllers/city-controller') ;
const router = express.Router() ;

//create
router.post('/city' , cityController.create) ;
router.delete('/city/:id' , cityController.destroy);
router.get('/city/:id' , cityController.get);
router.patch('/city/:id', cityController.update) ;

module.exports = router ;