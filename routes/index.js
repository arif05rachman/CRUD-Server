const router = require('express').Router()
const Controller = require('../Controller/product')

router.post('/product', Controller.create)
router.get("/product", Controller.findAll);
router.get('/product/:id', Controller.findOne)
router.put('/product/:id', Controller.update)
router.delete("/product/:id", Controller.delete);

module.exports = router