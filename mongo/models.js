const mongoose = require('./config'),
    Schema = mongoose.Schema

const schemas = {
    userSchema: new Schema({
        email: { type: String, required: true, unique: true, lowercase: true },
        displayName: { type: String, required: true },
        password: { type: String, required: true }
    }),

    productSchema: new Schema({
        name: { type: String, required: true },
        picture: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true, enum: ['Technology', 'Clothes', 'Home appliances', 'Others', 'Automobiles'] },
        description: { type: String, required: true }
    })
}

const models = {
    User: mongoose.model('users', schemas.userSchema),
    Product: mongoose.model('Product', schemas.productSchema)
}

module.exports = models