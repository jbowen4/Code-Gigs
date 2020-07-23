const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// Get all gigs
router.get('/', (req, res) => 
  Gig.findAll()
    .then(gigs => res.render('gigs', { gigs }))
    .catch(err => res.render('error', {error: err})));

// Add a gig


module.exports = router;