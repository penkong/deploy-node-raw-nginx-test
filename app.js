const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>i am here to become better</h1>')
})

app.listen(5000, () => {
  console.log('i started at 5000')
})
