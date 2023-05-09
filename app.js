const express = require('express')

const app = express()
 app.get('/', (req, res) => {
  res.send('Hello Docker.\n')
 })

 app.listen(8080, '0.0.0.0')
