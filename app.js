const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Hello world")
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})
// app.get('*', (req, res) => {
//     res.send("404 PAGE NOT FOUND")
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})