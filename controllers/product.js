const db = require('../mongo/models')

module.exports = {
    getProducts: async (req, res, next) => {
        const products = await db.Product.find()
        res.status(200).json(products)
    },

    getProduct: async (req, res, next) => {
        const product = await db.Product.findById(req.params.productId)
        res.status(200).json(product)
    },

    saveProduct: async (req, res, next) => {
        const newProduct = new db.Product({
            name: req.body.name,
            picture: req.body.picture,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description
        })

        const productStored = await newProduct.save()
        res.status(200).json(productStored)
    },

    updateProduct: async (req, res, next) => {
        const updatedProduct = await db.Product.findByIdAndUpdate(req.params.productId, req.body)
        res.status(200).json(updatedProduct)
    },

    deleteProduct: async (req, res, next) => {
        const deletedProduct = await db.Product.findByIdAndRemove(req.params.productId)
        res.status(200).json({ message: 'El producto fue eliminado' })
    }
}