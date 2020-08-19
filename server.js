const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server,
    noCache: true
})

server.get('/', function(req, res) {
    return res.send("hiiii")
})

server.listen(1000, function() {
    console.log('O servidor esta rodando!')
})