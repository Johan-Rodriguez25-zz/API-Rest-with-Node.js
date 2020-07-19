const user = require('../controllers/user')

const router = require('express-promise-router')(),
    productControl = require('../controllers/product'),
    userControl = require('../controllers/user')

router.get('/product', productControl.getProducts)
router.get('/product/:productId', productControl.getProduct)
router.post('/product', productControl.saveProduct)
router.put('/product/:productId', productControl.updateProduct)
router.delete('/product/:productId', productControl.deleteProduct)

router.post('/signup', userControl.signUp)
router.post('/signin', userControl.signIn)

module.exports = router