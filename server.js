const express = require('express')  //importing express library
const nunjucks = require('nunjucks') //importing nunjucks library
const routes = require("./routes")

const server = express()


//CSS file using
server.use(express.static('public'))



//configuring template engine(nunjucks)
server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})



//creating routes
server.get("/", function(req, res) {
    return res.render("index")
})


// start server
server.listen(3001, function(req, res) {
    console.log("server is running")
})