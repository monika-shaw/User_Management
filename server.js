const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')

const connectDB = require('./server/database/connection')
const app = express()

dotenv.config({ path: '.env' })
const PORT = process.env.PORT || 5000

//log requests
app.use(morgan('dev'))
connectDB();

app.use(express.json());

//parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }))

//set view engine
app.set("view engine", "ejs")

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load routers 
app.use('/', require('./server/routes/router'))
app.listen(PORT, (req, res) => {
    console.log("listening on");
});