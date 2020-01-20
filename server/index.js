const express = require('express')
const app = express()
const morgan = require('morgan')
module.exports = app

// logging
app.use(morgan('dev'))

// api routes
app.use('/api', require('./api'))

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`waiting for pyramid words on port ${PORT}`)
})
