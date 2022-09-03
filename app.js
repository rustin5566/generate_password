// require modules
const express = require('express')
const app = express()
const generatePassword = require('./generate_password')
const exphbs = require('express-handlebars')
const port = 3000

// setting engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routing
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password: password, options: options })
})

app.listen(port, () => {
  console.log(`express app listening on port ${port}`)
})