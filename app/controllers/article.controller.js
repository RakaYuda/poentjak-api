const db = require("../models");
// const Article = db.Article;
// const Author = db.Author;
const Op = db.Sequelize.Op;

const Author = db.sequelize.define("author", {
    id: {
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },
    name_author: {
        type: db.Sequelize.STRING
    },
    img_author: {
        type: db.Sequelize.STRING
    }
}, {
    timestamp: false,
    tableName: "author",
});
const Article = db.sequelize.define("article", {
    id: {
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },
    img_article: {
        type: db.Sequelize.STRING
    },
    title_article: {
        type: db.Sequelize.STRING
    },
    article: {
        type: db.Sequelize.TEXT
    },
    post_date: {
        type: db.Sequelize.DATE
    },
    published: {
        type: db.Sequelize.BOOLEAN
    },
    id_author: {
        type: db.Sequelize.INTEGER,
    }


}, {
    timestamp: false,
    tableName: "blog",
});
// Article.hasOne(Author);
Article.belongsTo(Author, {
    as: 'author',
    foreignKey: 'id_author'
})
// Author.hasOne(Article, {
//     foreignKey: 'author_id'
// });

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const article = {
        // title: req.body.title,
        // description: req.body.description,
        // published: req.body.published ? req.body.published : false
        // id: req.body.id,
        img_article: req.body.img_article,
        title_article: req.body.title_article,
        article: req.body.article,
        post_date: req.body.post_date,
        published: req.body.published,
        id_author: req.body.id_author
    };

    // Save Tutorial in the database
    Article.create(article)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title_article = req.query.title_article;
    var condition = title_article ? {
        title_article: {
            [Op.like]: `%${title_article}%`
        }
    } : null;

    Article.findAll({
        where: condition,
        include: [{ // Notice `include` takes an ARRAY
            model: Author,
            as: 'author'
        }]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// // Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Article.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
}

// // Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Article.update(req.body, {
        where: { id: id }
    })
        .then(data => {
            res.send({
                message: "Article was updated successfully."
            });
            // if (num == 1) {
            //     res.send({
            //         message: "Tutorial was updated successfully."
            //     });
            // } else {
            //     res.send({
            //         message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            //     });
            // }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
}

// // Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Article.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Article was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {

// };

// // Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Article.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Articles."
            });
        });
};