const express = require('express')
const mongoose = require('mongoose')
const app = express()

// MiddelWare
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./routes/animes.routes')

app.use(bodyParser.json());
app.use(morgan('dev'));


require('dotenv').config()

mongoose
    .connect(process.env.MONGOOSE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('Connexion à MongoDB réussi.'))
    .catch((err) => console.log('Connexion échoué : ', err.message))


app.get('/', (req, res) => {
    res.json('Hello')
})

app.use('/api/animes', router)

module.exports = app