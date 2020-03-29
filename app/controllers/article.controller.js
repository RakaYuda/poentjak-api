const db = require("../models");
// const Blog = db.blog;
// const Author = db.author;
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
const Blog = db.sequelize.define("blog", {
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
    // id_author: {
    //     type: db.Sequelize.INTEGER,
    // }


}, {
    timestamp: false,
    tableName: "blog",
});
// Article.hasOne(Author);
// Blog.belongsTo(Author, {
//     as: 'author',
//     foreignKey: 'id_author'
// })
Blog.hasOne(Author, {
    foreignKey: 'id'
});

// Create and Save a new Tutorial
// exports.create = (req, res) => {

// };


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title_article;
    var condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;

    Blog.findAll({
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
// exports.findOne = (req, res) => {

// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {

// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {

// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {

// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {

// };