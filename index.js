const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
    res.send('I am healthy')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})