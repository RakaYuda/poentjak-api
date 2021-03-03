module.exports = app => {
    const mountains = require("../controllers/mountain.controller.js");

    var router = require("express").Router();

    // Create a new Mountain
    router.post("/", mountains.create);

    // Retrieve all Mountain
    router.get("/", mountains.findAll);

    // Retrieve all published Mountain
    // router.get("/published", articles.findAllPublished);

    // Retrieve a single Mountain with id
    router.get("/:id", mountains.findOne);

    // Update a Mountain with id
    router.put("/:id", mountains.update);

    // Delete a Mountain with id
    router.delete("/:id", mountains.delete);

    // // Create a new Mountain
    // router.delete("/", articles.deleteAll);

    app.use('/api/mountains', router);
};