const router = require('express-promise-router')(),
    productControl = require('../controllers/product'),
    userControl = require('../controllers/user'),
    auth = require('../middlewares/auth')

router.get('/product', productControl.getProducts)
router.get('/product/:productId', productControl.getProduct)
router.post('/product', auth.verifyToken, productControl.saveProduct)
router.put('/product/:productId', auth.verifyToken, productControl.updateProduct)
router.delete('/product/:productId', auth.verifyToken, productControl.deleteProduct)

router.post('/signup', userControl.signUp)
router.post('/signin', userControl.signIn)
router.post('/logout', userControl.logOut)

module.exports = router