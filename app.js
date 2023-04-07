const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send(`It's an user authentication web app`)
})

app.listen(PORT, (req, res) =>{
  console.log(`The express server is listening on http://localhost:${PORT}/`)
})