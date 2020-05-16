const express = require('express');
const factRoutes = require('./facts.js');
const authRoutes = require('./auth.js');


const router = express.Router();

router.use('', factRoutes);
router.use('/auth', authRoutes);


module.exports = router;