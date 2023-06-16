const { Sequelize, DataTypes } = require('sequelize');
// Connection to DB
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
   {
     host: process.env.DATABASE_HOST,
     dialect: process.env.DATABASE_TYPE,
     define:{
       timestamps: true,
     },
   }
 );
 
// For testing the connection to DB

sequelize.authenticate().then(()=>{
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
})

const history = sequelize.define('History', {
  // Model attributes are defined here
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  input: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  output: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

sequelize.sync().then(() => {
  console.log('history table created successfully');
}).catch((error) => {
  console.error('Unable to create table: ', error);
});

module.exports = history