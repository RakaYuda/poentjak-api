module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define("author", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name_author: {
            type: Sequelize.STRING
        },
        img_author: {
            type: Sequelize.STRING
        }
    }, {
        timestamp: false,
        tableName: "author"
    });



    return Author;
};