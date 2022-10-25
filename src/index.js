const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
// route declare
const route1 = require('./routes')
//http logger
//app.use(morgan('combined'))
// template engines
app.engine('hbs', handlebars.engine({
  // khong can lam kieu nay de chuyen duoi sang .hbs, chi can doi ten trong app.engine
  extname: '.hbs'
}))
app.set('view engine','hbs')

app.set('views', path.join(__dirname, 'resource/views'))
//
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())

//route init
route1(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})