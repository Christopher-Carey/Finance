const finance = require('../controllers/finances.js');
//----^^-----------------------------------^^Change Controller
module.exports = function (app) {

    app.get("/api", (request, response) => finance.index(request,response));  

    app.get("/api/task/:id", (request, response) => finance.show(request,response));

    app.post("/api/task/new", (request, response) => finance.create(request,response)); 

    app.put("/api/task/update/:id", (request, response) => finance.update(request,response));

    app.delete("/api/task/destroy/:id", (request, response) => finance.destroy(request,response));  

}