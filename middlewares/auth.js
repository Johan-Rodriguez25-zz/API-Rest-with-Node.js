const jwt = require('jsonwebtoken'),
    config = require('../config/config')

module.exports = {
    verifyToken: async (req, res, next) => {
        const token = req.headers['x-access-token']

        const decoded = await jwt.verify(token, config.secretToken)
        req.userId = decoded.id
        next()
    }
}