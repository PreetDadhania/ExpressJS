const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/homepage', (req, res) => {
    res.render('home', { mya: 'Preet' })
})

app.get('/marksheet', (req, res) => {
    res.render('marksheet')
})

app.post('/marksheetprocess', (req, res) => {
    console.log(req.body)
    var sub1 = req.body.txt1
    var sub2 = req.body.txt2
    var c = parseInt(sub1) + parseInt(sub2)
    res.render('ans', { mya: sub1, myb: sub2, myc: c })
})

app.get('/sumprocess', (req, res) => {
    var a = req.query.txt1
    var b = req.query.txt2
    var c = parseInt(a) + parseInt(b)
    res.send(`The value of A is ${a} <br/>The value of B is ${b} <br/>The sum is ${c}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})