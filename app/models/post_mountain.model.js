module.exports = (sequelize, Sequelize) => {

    const Post_Mountain = sequelize.define("post_mountain", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        post_name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        id_mountain: {
            type: Sequelize.INTEGER
        }

    
    }, {
        timestamp: false,
        tableName: "mountain_post",
    });

    return Post_Mountain;
};