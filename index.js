const express = require('express'),
    bodyParse = require('body-parser'),
    router = require('./routes/routes'),
    config = require('./config/config'),
    app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))
app.use('/', router)

app.listen(config.port, () => {
    console.log('Listening on port', config.port)
})