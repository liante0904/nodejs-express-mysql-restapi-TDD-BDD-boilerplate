/** sqlite에서 MySQL 연동으로 변경 */
const config = require('./config/environments');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
  host: config.mysql.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
//  storage: 'path/to/database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

module.exports = {Sequelize, sequelize, User};


