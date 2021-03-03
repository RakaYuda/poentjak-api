const { image_mountains, post_mountains } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;
const Mountain = db.mountains;
const Image_Mountain = db.image_mountains;
const Post_Mountain = db.post_mountains;


Mountain.hasMany(Image_Mountain, {
    as: 'image_mountain',
    foreignKey: 'id_mountain'
})

Mountain.hasMany(Post_Mountain, {
    as: 'post_mountain',
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
        coordinate: req.body.coordinate,
        rating: req.body.rating,
        img_mt: req.body.img_mt,
        location: req.body.location,
        description: req.body.description,
        notes: req.body.notes,
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
        include: [
            { // Notice `include` takes an ARRAY
                model: Image_Mountain,
                as: 'image_mountain'
            }, {
                model: Post_Mountain,
                as: 'post_mountain'
            },],
    })
        .then(data => {
            res.send({ mountains: data });
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

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Mountain.update(req.body, {
            where: {
                id: id
            }
        })
        .then(data => {
            res.send({
                message: "Mountain was updated successfully."
            });
            // if (num == 1) {
            //     res.send({
            //         message: "Mountain was updated successfully."
            //     });
            // } else {
            //     res.send({
            //         message: `Cannot update Mountain with id=${id}. Maybe Mountain was not found or req.body is empty!`
            //     });
            // }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Mountain with id=" + id
            });
        });
}

// // Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Mountain.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Mountains was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Mountains with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Mountains with id=" + id
            });
        });
};

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