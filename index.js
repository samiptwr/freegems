const express = require('express')
const path = require('path')

const app = express()

//middlewres
app.use(express.static('./public'))

//home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

//rewards-page
app.get('/rewards', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'rewards', 'rewards.html'))
})

//ad-pages
app.get('/shrinkme', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'shrinkme.html'))
})
app.get('/shrinkme', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'shrinkme.html'))
})
app.get('/shrinkearn', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'Shrinkearn.html'))
})
app.get('/smoner', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'smoner.html'))
})
app.get('/clksh', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'clksh.html'))
})
app.get('/cloaking', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'cloaking.html'))
})
app.get('/gplinks', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'gplinks.html'))
})
app.get('/exe', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'exe.html'))
})
app.get('/btcut', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'btcut.html'))
})
app.get('/clicksfly', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'clicksfly.html'))
})
app.get('/linksly', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'linksly.html'))
})
app.get('/adpaylink', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'adpaylink.html'))
})
app.get('/v2', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'v2links.html'))
})

app.get('/destination', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ads-pages', 'destination.html'))
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is listening at port ${process.env.PORT || 5000}`)
})