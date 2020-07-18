const express = require('express'),
    bodyParse = require('body-parser'),
    router = require('./routes/routes'),
    app = express(),
    port = process.env.PORT || 4000

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))
app.use('/', router)

app.listen(port, () => {
    console.log('Listening on port', port)
})