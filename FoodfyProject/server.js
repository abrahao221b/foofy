const express = require('express')
const nunjucks = require('nunjucks')
const imgs = require("./data")

const server = express()

server.use(express.static('public'))

server.set("views engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {

    return res.render("page-home.html", {items: imgs})
})

server.get("/page-description.html", function(req, res) {

    return res.render("page-description.html")
})

server.get("/page-recipe.html", function(req, res) {

    return res.render("page-recipe.html", {items: imgs})
})

server.listen(5000, () => {
    console.log("Server is runnig");
})

