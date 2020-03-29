// const Author = require("./author.model.js");
module.exports = (sequelize, Sequelize) => {
    // const Author = sequelize.define("author", {
    //     id: {
    //         primaryKey: true,
    //         type: Sequelize.INTEGER
    //     },
    //     name_author: {
    //         type: Sequelize.STRING
    //     },
    //     img_author: {
    //         type: Sequelize.STRING
    //     }
    // }, {
    //     timestamp: false,
    //     tableName: "author"
    // });
    const Blog = sequelize.define("blog", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        img_article: {
            type: Sequelize.STRING
        },
        title_article: {
            type: Sequelize.STRING
        },
        article: {
            type: Sequelize.TEXT
        },
        post_date: {
            type: Sequelize.DATE
        },


    }, {
        timestamp: false,
        tableName: "blog",
        // classMethods: {
        //     associate: function (model) {
        //         Blog.hasOne(Author, {
        //             foreignKey: 'id_author'
        //         });
        //     }
        // }
    });
    // Blog.belongsTo(Author, {
    //     as: 'author',
    //     foreignKey: 'id_author'
    // })
    return Blog;
};