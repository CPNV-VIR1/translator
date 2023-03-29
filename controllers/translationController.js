/**
 * @file      translationController.js
 * @brief     Translation controller
 * @author    Created by Vivien.PICCIN
 * @version   2023-03-29 - original
 */
const translator = require("../app/translator/translator");

const translate = (req, res) => {
    res.send(translator.translate(req.body.text, req.body.language));
}

module.exports = {
    translate
}