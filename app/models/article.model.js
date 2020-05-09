// const Author = require("./author.model.js");
module.exports = (sequelize, Sequelize) => {

    const Article = sequelize.define("article", {
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
        published: {
            type: Sequelize.BOOLEAN
        },
        id_author: {
            type: Sequelize.INTEGER,
        }


    }, {
        timestamp: false,
        tableName: "blog",
    });
    return Article;
};