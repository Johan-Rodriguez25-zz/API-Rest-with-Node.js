const router = require('express-promise-router')(),
    productControl = require('../controllers/product')

router.get('/product', productControl.getProducts)
router.get('/product/:productId', productControl.getProduct)
router.post('/product', productControl.saveProduct)
router.put('/product/:productId', productControl.updateProduct)
router.delete('/product/:productId', productControl.deleteProduct)

module.exports = router