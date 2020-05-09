module.exports = app => {
    const mountains = require("../controllers/mountain.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", mountains.create);

    // Retrieve all articles
    router.get("/", mountains.findAll);

    // Retrieve all published articles
    // router.get("/published", articles.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", mountains.findOne);

    // Update a Tutorial with id
    // router.put("/:id", articles.update);

    // Delete a Tutorial with id
    // router.delete("/:id", articles.delete);

    // // Create a new Tutorial
    // router.delete("/", articles.deleteAll);

    app.use('/api/mountains', router);
};