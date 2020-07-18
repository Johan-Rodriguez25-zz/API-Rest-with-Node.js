const express = require('express'),
    bodyParser = require('body-parser')
    app = express()
    port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Listening on port', port)
})