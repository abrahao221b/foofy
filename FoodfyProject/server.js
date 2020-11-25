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

    return res.render("page-home.njk", {items: imgs})
})

server.get("/page-description", function(req, res) {

    return res.render("page-description.njk")
})

server.get("/page-recipe", function(req, res) {

    return res.render("page-recipe.njk", {items: imgs})
})

server.use(function(res, req) {
    res.status(404).render("Page not-found")
})

server.listen(5000, () => {
    console.log("Server is runnig");
})

