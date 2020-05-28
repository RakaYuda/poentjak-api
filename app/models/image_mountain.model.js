module.exports = (sequelize, Sequelize) => {

    const Image_Mountain = sequelize.define("image_mountain", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        img_mt: {
            type: Sequelize.STRING
        },
        id_mountain: {
            type: Sequelize.INTEGER
        }
    
    }, {
        timestamp: false,
        tableName: "list_image_mountain",
    });
    
    return Image_Mountain;
};