const db = require("../models");
const Op = db.Sequelize.Op;

const Mountain = db.sequelize.define("mountain", {
    id: {
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },
    name_mt: {
        type: db.Sequelize.STRING
    },
    img_mt: {
        type: db.Sequelize.STRING
    },
    location: {
        type: db.Sequelize.STRING
    }

}, {
    timestamp: false,
    tableName: "mountain",
});

const Image_Mountain = db.sequelize.define("image_mountain", {
    id: {
        primaryKey: true,
        type: db.Sequelize.INTEGER
    },
    img_mt: {
        type: db.Sequelize.STRING
    },
    id_mountain: {
        type: db.Sequelize.INTEGER
    }

}, {
    timestamp: false,
    tableName: "list_image_mountain",
});

Mountain.hasMany(Image_Mountain, {
    as: 'image_mountain',
    foreignKey: 'id_mountain'
})

// Create and Save a new Mountain
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Mountain
    const mountain = {
        name_mt: req.body.name_mt,
        img_mt: req.body.img_mt,
        location: req.body.location,
    };

    // Save Mountain in the database
    Mountain.create(mountain)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Mountain Data."
            });
        });
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const mount_name = req.query.name_mt;
    var condition = mount_name ? {
        mount_name: {
            [Op.like]: `%${mount_name}%`
        }
    } : null;

    Mountain.findAll({
            where: condition,
            include: [{ // Notice `include` takes an ARRAY
                model: Image_Mountain,
                as: 'image_mountain'
            }],
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Mountains."
            });
        });
};

// // Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Mountain.findByPk(id)
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
// exports.update = (req, res) => {
//     const id = req.params.id;

//     Article.update(req.body, {
//             where: {
//                 id: id
//             }
//         })
//         .then(data => {
//             res.send({
//                 message: "Article was updated successfully."
//             });
//             // if (num == 1) {
//             //     res.send({
//             //         message: "Tutorial was updated successfully."
//             //     });
//             // } else {
//             //     res.send({
//             //         message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
//             //     });
//             // }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating Tutorial with id=" + id
//             });
//         });
// }

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Article.destroy({
//             where: {
//                 id: id
//             }
//         })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Article was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Tutorial with id=" + id
//             });
//         });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {

// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//     Article.findAll({
//             where: {
//                 published: true
//             },
//             include: [{ // Notice `include` takes an ARRAY
//                 model: Author,
//                 as: 'author'
//             }],
//             attributes: [
//                 "id",
//                 "img_article",
//                 "title_article",
//                 "article",
//                 [db.sequelize.fn('date_format', db.sequelize.col('post_date'), '%Y-%m-%d %H:%i:%S'), 'post_date'],
//                 "published",
//                 // "id_author",
//             ]
//         }, )
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving Articles."
//             });
//         });
// };