const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('css'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server,
    noCache: true
})

server.get('/', function(req, res) {
    return res.render("introducao")
})

server.get('/sobre', function(req, res) {
    return res.render("sobre")
})

server.get('/receitas', function(req, res) {
    return res.render("receitas")
})

server.listen(1000, function() {
    console.log('O servidor esta rodando!')
})