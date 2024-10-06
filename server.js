const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const app = express()

dotenv.config({path:'.env'})
const PORT = process.env.PORT || 5000

app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.listen(PORT, (req, res) => {
    console.log("listening on");
});