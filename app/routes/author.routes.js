module.exports = app => {
    const authors = require("../controllers/author.controller.js");

    var router = require("express").Router();

    // Create a new Author
    router.post("/", authors.create);

    // Retrieve all Author
    router.get("/", authors.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", authors.findOne);

    // Update a Tutorial with id
    router.put("/:id", authors.update);

    // Delete a Tutorial with id
    router.delete("/:id", authors.delete);

    // // Create a new Tutorial
    // router.delete("/", articles.deleteAll);

    app.use('/api/authors', router);
};