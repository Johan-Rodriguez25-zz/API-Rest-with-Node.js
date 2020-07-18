const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('[db] connection successfully')
})
    .catch(err => console.log('[db]', err))

module.exports = mongoose