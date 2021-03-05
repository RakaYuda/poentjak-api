const db = require("../models");
const Author = db.authors;
const Op = db.Sequelize.Op;

// Create and Save a new Author
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Author
    const author = {
        name_author: req.body.name_author,
        img_author: req.body.img_author,
    };

    // Save Author in the database
    Author.create(author)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Author."
            });
        });
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name_author = req.query.name_author;
    var condition = name_author ? {
        name_author: {
            [Op.like]: `%${name_author}%`
        }
    } : null;

    Author.findAll({
            where: condition,
            // include: [{ // Notice `include` takes an ARRAY
            //     model: Author,
            //     as: 'author'
            // }]
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

// // Find a single Author with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Article.findByPk(id)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving Author with id=" + id
//             });
//         });
// }

// // Update a Author by the id in the request
// exports.update = (req, res) => {
//     const id = req.params.id;

//     Article.update(req.body, {
//         where: { id: id }
//     })
//         .then(data => {
//             res.send({
//                 message: "Article was updated successfully."
//             });
//             // if (num == 1) {
//             //     res.send({
//             //         message: "Author was updated successfully."
//             //     });
//             // } else {
//             //     res.send({
//             //         message: `Cannot update Author with id=${id}. Maybe Author was not found or req.body is empty!`
//             //     });
//             // }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating Author with id=" + id
//             });
//         });
// }

// // Delete a Author with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Article.destroy({
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Article was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Author with id=${id}. Maybe Author was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Author with id=" + id
//             });
//         });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {

// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//     Article.findAll({ where: { published: true } })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving Articles."
//             });
//         });
// };