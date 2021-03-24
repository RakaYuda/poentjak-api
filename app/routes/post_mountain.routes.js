module.exports = app => {
    const post_mountain = require("../controllers/post_mountain.controller.js");

    var router = require("express").Router();

    // Create a new Mountain
    router.post("/", post_mountain.create);

    // Retrieve all Mountain
    router.get("/", post_mountain.findAll);

    // Retrieve all post by mountain id
    router.get("/mountain/:id", post_mountain.findByMountain);

    // Retrieve all published Mountain
    // router.get("/published", articles.findAllPublished);

    // Retrieve a single Mountain with id
    router.get("/:id", post_mountain.findOne);

    // Update a Mountain with id
    router.put("/:id", post_mountain.update);

    // Delete a Mountain with id
    router.delete("/:id", post_mountain.delete);

    // // Create a new Mountain
    // router.delete("/", articles.deleteAll);

    app.use('/api/post_mountains', router);
};