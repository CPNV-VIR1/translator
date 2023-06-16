/**
 * @file      saving.history.js
 * @brief     Code for saving in DB the history of the translation worker
 * @author    Created by Victorien.Montavon
 * @version   12-06-2023 - original
 */

const Sequelize = require("sequelize");

// Connection to DB
const sequelize = new Sequelize(
   {
     host: database_host,
     dialect: database_type,
     define:{
       timestamps: true,
     },
   }
 );
 
// For testing the connection to DB

 try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
} 

connection.connect((error) => {
  if (error) {
    console.error('Erreur de connexion à la base de données :', error);
  } else {
    console.log('Connecté à la base de données MySQL.');
  }
});
module.exports = sequelize;


    // Create DB "Translator_DB"
    connection.query('CREATE DATABASE IF NOT EXISTS Translator_DB', (error) => {
      if (error) {
        console.error('Erreur lors de la création de la base de données :', error);
      } else {
        console.log('Base de données créée avec succès.');

        // Select newly created DB
        connection.query('USE Translator_DB', (error) => {
          if (error) {
            console.error('Erreur lors de la sélection de la base de données :', error);
          } else {
            console.log('Base de données sélectionnée.');

            // Create table "History"
            const createTableQuery = `
              CREATE TABLE IF NOT EXISTS History (
                id INT AUTO_INCREMENT PRIMARY KEY,
                input VARCHAR(255),
                output VARCHAR(255),
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
              )
            `;
            connection.query(createTableQuery, (error) => {
              if (error) {
                console.error('Erreur lors de la création de la table "History" :', error);
              } else {
                console.log('Table "History" créée avec succès.');

                // Close db connection
                connection.end((error) => {
                  if (error) {
                    console.error('Erreur lors de la fermeture de la connexion :', error);
                  } else {
                    console.log('Connexion fermée avec succès.');
                  }
                });
              }
            });
          }
        });
      }
    });
  