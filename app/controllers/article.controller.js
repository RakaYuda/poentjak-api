const db = require("../models");
const Article = db.articles;
const Author = db.authors;
const Op = db.Sequelize.Op;


// Adding foreign key from article to author
Article.belongsTo(Author, {
    as: 'author',
    foreignKey: 'id_author'
})


// Create and Save a new Article
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Article
    const article = {
        img_article: req.body.img_article,
        title_article: req.body.title_article,
        article: req.body.article,
        id_author: req.body.id_author,
        published: req.body.published ? req.body.published : false,
        
    };

    // Save Article in the database
    Article.create(article)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Article."
            });
        });
};


// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
    const title_article = req.query.title_article;
    var condition = title_article ? {
        title_article: {
            [Op.like]: `%${title_article}%`
        }
    } : null;

    Article.findAll({
            where: condition,
            include: [{
                model: Author,
                as: 'author'
            }],
            attributes: [
                "id",
                "img_article",
                "title_article",
                "article",
                [db.sequelize.fn('date_format', db.sequelize.col('post_date'), '%Y-%m-%d %H:%i:%S'), 'post_date'],
                "published",
                // "id_author",
            ]
        })
        // .then(function (result) {
        //     console.log(result);

        // })
        .then(data => {

            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// // Find a single Article with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Article.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Article with id=" + id
            });
        });
}

// // Update a Article by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Article.update(req.body, {
            where: {
                id: id
            }
        })
        .then(data => {
            res.send({
                message: "Article was updated successfully."
            });
            // if (num == 1) {
            //     res.send({
            //         message: "Article was updated successfully."
            //     });
            // } else {
            //     res.send({
            //         message: `Cannot update Article with id=${id}. Maybe Article was not found or req.body is empty!`
            //     });
            // }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Article with id=" + id
            });
        });
}

// // Delete a Article with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Article.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Article was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Article with id=${id}. Maybe Article was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Article with id=" + id
            });
        });
};

// // Delete all Articles from the database.
// exports.deleteAll = (req, res) => {

// };

// Find all published Articles
exports.findAllPublished = (req, res) => {
    Article.findAll({
            where: {
                published: true
            },
            include: [{ // Notice `include` takes an ARRAY
                model: Author,
                as: 'author'
            }],
            attributes: [
                "id",
                "img_article",
                "title_article",
                "article",
                [db.sequelize.fn('date_format', db.sequelize.col('post_date'), '%Y-%m-%d %H:%i:%S'), 'post_date'],
                "published",
                // "id_author",
            ]
        }, )
        .then(data => {
            res.send({
                articles: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Articles."
            });
        });
};