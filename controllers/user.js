const bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    config = require('../config/config'),
    db = require('../mongo/models')

module.exports = {
    signUp: async (req, res, next) => {
        const newUser = new db.User({
            email: req.body.email,
            displayName: req.body.displayName,
            password: await bcrypt.hash(req.body.password, 10)
        })

        const userStored = await newUser.save()
        const token = jwt.sign({ id: newUser._id }, config.secretToken, { expiresIn: 60 * 60 * 24 })
        res.status(200).json({ message: 'Se ha registrado correctamente', auth: true, token })
    },

    signIn: async (req, res, next) => {
        const user = await db.User.findOne({ email: req.body.email })
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) res.json({ message: 'La contraseña o el email son incorrectos', auth: false })
        else {
            const token = jwt.sign({ id: user._id }, config.secretToken, { expiresIn: 60 * 60 * 24 })
            res.status(200).json({ message: 'Se ha logueado correctamente', auth: true, token })
        }
    },

    logOut: async (req, res, next) => {
        res.status(200).send({ auth: false, token: null })
    }
}