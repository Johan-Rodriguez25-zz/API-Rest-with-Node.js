const bcrypt = require('bcrypt'),
    db = require('../mongo/models')

module.exports = {
    signUp: async (req, res, next) => {
        const newUser = new db.User({
            email: req.body.email,
            displayName: req.body.displayName,
            password: await bcrypt.hash(req.body.password, 10)
        })

        const userStored = await newUser.save()
        res.status(200).json({ message: 'Se ha registrado correctamente' })
    },

    signIn: async (req, res, next) => {
        const user = await db.User.findOne({ email: req.body.email })
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        res.status(200).json({ message: 'Se ha logueado correctamente' })
    },
}