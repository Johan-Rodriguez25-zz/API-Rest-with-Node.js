const mongoose = require('mongoose'),
    url = process.env.MONGODB || `mongodb://localhost:27017/API`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('[db] conectada con exito washiiiin como es papi')
})
    .catch(err => console.log('[db] ', err))

module.exports = mongoose