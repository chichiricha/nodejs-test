const newsroute = require('./news')
const siteroute = require('./site')
const searchroute = require('./search')
function route(app) {

    app.use('/tintuc', newsroute)
    
    app.use('/search', searchroute)

    app.use('/', siteroute)

    //app.post('/search', (req, res) => {
    //     console.log(req.body)
    //     res.send('')
    //})

}

module.exports = route
