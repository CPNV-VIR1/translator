/**
 * @file      index.js
 * @brief     Index route file
 * @author    Created by Vivien.PICCIN
 * @version   2023-03-29 - original
 */

const { Router } = require('express');
const { indexView } = require('../controllers/indexController');
const router = Router();

router.get('/', indexView);

module.exports = router;