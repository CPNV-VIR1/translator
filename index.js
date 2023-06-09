/**
 * @file      index.js
 * @brief     Entry file for the translator app
 * @author    Created by Vivien.Piccin
 * @version   08-03-2023 - original
 */


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/translation', require('./routes/translation'));

if (process.env.NODE_ENV != 'test') {
    app.listen(process.env.NODE_PORT || 8080, () => {
        console.log(`Translatator started on port: ${process.env.NODE_PORT || 8080}`);
    });
}

module.exports = app;