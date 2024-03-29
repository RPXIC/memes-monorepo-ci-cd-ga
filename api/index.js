const express = require('express')
var cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(routes)

module.exports = app