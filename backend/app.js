require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

// Configuring CORS Headers
const corsOptions = {
    origin: 'http://localhost:3001',
    allowedHeaders: 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization'
}
app.use(cors(corsOptions))

app.use('/', (req, res, next) => {
    res.json({ msg: 'Hello world' })
})

module.exports = app;
