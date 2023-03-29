/**
 * @file      translationController.js
 * @brief     Translation controller
 * @author    Created by Vivien.PICCIN
 * @version   2023-03-29 - original
 */
const translator = require("../app/translator/translator");

const translate = (req, res) => {
    if(req.body.text != undefined && req.body.language != undefined){
        res.send(translator.translate(req.body.text, req.body.language));
    } else {
        res.sendStatus(400);
    }
}

module.exports = {
    translate
}