var DataTypes = require("sequelize").DataTypes;
var _priorities = require("./priorities");
var _status = require("./status");
var _tickets = require("./tickets");
var _users = require("./users");

function initModels(sequelize) {
  var priorities = _priorities(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var tickets = _tickets(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    priorities,
    status,
    tickets,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
