const express = require('express');
const router = express.Router();
const homeController = require('../controllers/planets')

// * Handles initial GET request from the homepage

router.get('/', homeController.getPlanets) // read
router.get('/moons', homeController.getMoons) // read

module.exports = router