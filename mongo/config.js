const mongoose = require('mongoose'),
    config = require('../config/config')

mongoose.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('[db] connection successfully')
})
    .catch(err => console.log('[db] ', err))

module.exports = mongoose