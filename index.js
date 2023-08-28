const express = require('express');
const app = express()
const route = require('./config/routes')
require('dotenv').config()
require('./config/mongoose')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(route)
app.listen(3000, ()=> {
    console.log('on port 3000');
})