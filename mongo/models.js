const mongoose = require('./config'),
    Schema = mongoose.Schema

const schemas = {
    userSchema: new Schema({
        email: { type: String, unique: true, lowercase: true },
        displayName: String,
        password: String
    }),

    productSchema: new Schema({
        name: String,
        picture: String,
        price: {type: Number, default: 0},
        category: {type: String, enum: ['Technology', 'Clothes', 'Home appliances', 'Others', 'Automobiles']},
        description: String
    })
}

const models = {
    User: mongoose.model('users', schemas.userSchema),
    Product: mongoose.model('Product', schemas.Product)
}