/**
 * @file      translator.js
 * @brief     Code for the translation worker
 * @author    Created by Vivien.Piccin
 * @version   08-03-2023 - original
 */

const crypto = require("crypto");
const seedrandom = require("seedrandom");
const dictionary = require("./dictionary.json");
module.exports = class Translator {
    static translate(text, language = 'ip') {
        let textHash = crypto.createHash('sha256');
        textHash.update(text);
        return text.split(' ').map(element => {
            try {
                return dictionary[language][this.generateRandom(textHash.digest('base64'),0, dictionary[language].length)];
            } catch (ex) {
                //Need to raise some sort of error
                return element;
            }
        }).toString().replace(/,/g, ' ');
    }
    static generateRandom(seed = 'seed', min = 0, max = 100) {
        let random = seedrandom(seed);
        return Math.floor(random() * (max - min)) + min;
    }
}