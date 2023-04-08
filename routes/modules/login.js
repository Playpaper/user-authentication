const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.post('/', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email, password })
    .then(data => {
      data ? res.render('welcome', { name: data.firstName }) : res.render('index', { email })
    })
    .catch(err => console.log(err))
})

module.exports = router