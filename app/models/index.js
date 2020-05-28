const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    define: {
        timestamps: false
    },

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.articles = require("./article.model.js")(sequelize, Sequelize);
db.authors = require("./author.model.js")(sequelize, Sequelize);
db.mountains = require("./mountain.model.js")(sequelize, Sequelize);
db.image_mountains = require("./image_mountain.model.js")(sequelize, Sequelize);
db.post_mountains = require("./post_mountain.model.js")(sequelize, Sequelize);

module.exports = db;