const express = require('express')
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mydb1')
    .then(res => {
        console.log("DB Connected")
    })
    .catch(err => console.log("Error in DB connection", + err))
const Cat = mongoose.model('Cat', { no1: Number, no2: Number});

const app = express()
const port = 4000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Hello world")
})

// This is from Parameter Example
// http://127.0.0.1:4000/product/1/hello
// app.get('/product/:id/:id1', (req, res) => {
//     var id = req.params.id
//     var id1 = req.params.id1
//     res.send("Params value is " + id + " and " + id1)
// })

// // http://127.0.0.1:4000/search?q=lenovo
// app.get('/search/', (req, res) => {
//     var id = req.query.q
//     res.send("Params value is " + id)
// })

app.get('/sum', (req, res) => {
    res.sendFile(__dirname + '/sum.html')
})

app.get('/sumprocess', (req, res) => {
    var a = req.query.txt1
    var b = req.query.txt2

    const kitty = new Cat({ no1 : a, no2 : b });
    kitty.save().then(() => console.log('Data Added'));

    var c = parseInt(a) + parseInt(b)
    res.send(`The value of A is ${a} <br/>The value of B is ${b} <br/>The sum is ${c}`)
})

app.get('/sumapi', (req, res) => {
    Cat.find()
        .then(data => {
            res.json(data)
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})