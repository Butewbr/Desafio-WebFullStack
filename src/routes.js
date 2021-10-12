const express = require("express");
const routes = express.Router();

routes.get('/', (request, response) => { response.sendFile(__dirname + "/views/index.html");})

routes.get('/index.html', (request, response) => {
    
    return response.redirect("/");
})

module.exports = routes;