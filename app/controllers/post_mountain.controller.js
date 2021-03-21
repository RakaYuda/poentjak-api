const { post_mountains } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;
const Mountain = db.mountains;
const Post_Mountain = db.post_mountains;


// Post_Mountain.belongsTo(Mountain)

// Mountain.hasMany(Post_Mountain, {
//     as: 'post_mountain',
//     foreignKey: 'id_mountain'
// })


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

    const post_mountain = {
        post_name: req.body.post_name,
        description: req.body.description,
        id_mountain: req.body.id_mountain,
    };

    // Save Mountain in the database
    Post_Mountain.create(post_mountain)
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
    // const mount_name = req.query.name_mt;
    const id = req.params.id;

    // var condition = mount_name ? {
    //     mount_name: {
    //         [Op.like]: `%${mount_name}%`
    //     }
    // } : null;

    var condition = id ? {
        id_mountain: {
            [Op.eq]: id
        }
    } : null;

    Post_Mountain.findAll({
        where: condition,
        // include: [
        //     { // Notice `include` takes an ARRAY
        //         model: Image_Mountain,
        //         as: 'image_mountain'
        //     }, {
        //         model: Post_Mountain,
        //         as: 'post_mountain'
        //     },],
    })
        .then(data => {
            res.send({ post_mountains: data });
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

    Post_Mountain.findByPk(id)
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
// exports.update = (req, res) => {
//     const id = req.params.id;

//     Mountain.update(req.body, {
//             where: {
//                 id: id
//             }
//         })
//         .then(data => {
//             res.send({
//                 message: "Mountain was updated successfully."
//             });
//             // if (num == 1) {
//             //     res.send({
//             //         message: "Mountain was updated successfully."
//             //     });
//             // } else {
//             //     res.send({
//             //         message: `Cannot update Mountain with id=${id}. Maybe Mountain was not found or req.body is empty!`
//             //     });
//             // }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating Mountain with id=" + id
//             });
//         });
// }

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Mountain.destroy({
//             where: {
//                 id: id
//             }
//         })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Mountains was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Mountains with id=${id}. Maybe Tutorial was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Mountains with id=" + id
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