const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

// Connect to the database configuration
const sequelize = new Sequelize(
  todo,
  root,
  '',
  {
    host: localhost,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },  
    define: {
      timestamps: false
    }
    }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

const db = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
    
