const express = require('express');
const actorController = require('../controllers/actorController.js');
const router = express.Router();

router.get('/actors', actorController.list);
router.get('/actors/detail/:id', actorController.detail);


module.exports = router;