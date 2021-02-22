module.exports = (sequelize, Sequelize) => {

    const Mountain = sequelize.define("mountain", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name_mt: {
            type: Sequelize.STRING
        },
        coordinate: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.INTEGER
        },
        img_mt: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        }
    
    }, {
        timestamp: false,
        tableName: "mountain",
    });

    return Mountain;
};