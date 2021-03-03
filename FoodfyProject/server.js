const express = require('express')
const nunjucks = require('nunjucks')

const foods = require("./data")

const server = express()

server.use(express.static('public'))

server.set("views engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {

    return res.render("page-home.njk", {items: foods})
})

server.get("/page-description", function(req, res) {

    return res.render("page-description.njk")
})

server.get("/page-recipe", function(req, res) {

    return res.render("page-recipe.njk", {items: foods})
})

server.get("/food", function(req, res) {
    const id = req.query.id

    const food = foods.find(function(food) {
        return food.id == id
    })

    if (!food) {
        return res.send("Food not found!!!")
    }

    return res.render("food.njk", {item: food})
})

server.use(function(req, res) {
    res.status(404).render("not-found.njk");
})

server.listen(5000, () => {
    console.log("Server is runnig");
})

