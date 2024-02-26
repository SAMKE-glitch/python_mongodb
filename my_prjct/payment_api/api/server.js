/*
server configuration for this app
usage:   'npm run start-server'
functions: 
  cors to allow external api calls
  express to server our application
  express json to collect post data
  express router for routing
  authmiddleware for request verification
  port 5000 on local machine
  dotenv to load environment variables
*/

require('dotenv').config();
const router = require('./routes/index')
const express = require('express')
const cors = require('cors')
const app = express()
const authMiddleware = require("./middlewares/authMiddleware")

app.use(cors())
app.use(express.json())
//app.use('/', authMiddleware)
app.use('/', router)



const port = process.env.PORT || 5000;

app.listen(port, function(err) {
  if (err) console.log(err)
})

module.exports = app;
