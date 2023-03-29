/**
 * @file      index.js
 * @brief     Entry file for the translator app
 * @author    Created by Vivien.Piccin
 * @version   08-03-2023 - original
 */


const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
if(process.env.NODE_ENV != 'test') {
    const config = require('./config/' + (process.env.NODE_ENV || 'development') + '.js');
}

const app = express();

app.use(express.static(path.join(__dirname, '/public'), {etag: false}));
app.use(bodyParser.json());
app.use('/', require('./routes/index'));
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'resources/views'));
app.use('/', require('./routes/index'));
app.use('/translate', require('./routes/translate'));

if(process.env.NODE_ENV != 'test') {
    app.listen(config.Host.port || 8080, () => {
        console.log(`Translatator started on port: ${config.Host.port || 8080}`);
    });
}

module.exports = app;