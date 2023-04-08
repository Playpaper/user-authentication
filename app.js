const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const User = require('./models/user')

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

app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email, password })
    .then(data => {
      data ? res.render('welcome', { name: data.firstName }) : res.render('index', { email })
    })
    .catch(err => console.log(err))
})

app.listen(PORT, (req, res) =>{
  console.log(`The express server is listening on http://localhost:${PORT}/`)
})