/**
 * @file      translate.js
 * @brief     Translation route file
 * @author    Created by Vivien.PICCIN
 * @version   2023-03-29 - original
 */

const { Router } = require('express');
const { translate } = require('../controllers/translationController');
const router = Router();

router.post('/', translate);

module.exports = router;