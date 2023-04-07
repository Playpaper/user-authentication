const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', ()=> console.log('mongodb error !'))
db.once('open', () => console.log('mongodb connected !'))

const app = express()
const PORT = 3000

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, (req, res) =>{
  console.log(`The express server is listening on http://localhost:${PORT}/`)
})