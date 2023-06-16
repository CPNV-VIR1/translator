/**
 * @file      translator.js
 * @brief     Code for the translation worker
 * @author    Created by Vivien.Piccin
 * @version   08-03-2023 - original
 */

const crypto = require("crypto");
const seedrandom = require("seedrandom");
const dictionary = require("./dictionary.json");
const historyRecord = require("../../models/history.model");

module.exports = class Translator {
    static translate(text, language = 'ip') {
        let textHash = crypto.createHash('sha256');
        textHash.update(text);
        seedrandom(textHash.digest('base64'), { global: true});
        let translation = text.split(' ').map(element => {
            try {
                return dictionary[language][this.generateRandom(0, dictionary[language].length)];
            } catch (ex) {
                //Need to raise some sort of error
                console.log('Error raised !', ex.toString());
                return element;
            }
        }).toString().replace(/,/g, ' ');
        historyRecord.create({
            input: text,
            output: translation
        })
        return translation;
    }
    static generateRandom(min = 0, max = 100) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}