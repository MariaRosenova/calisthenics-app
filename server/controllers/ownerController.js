const router = require('express').Router();
const ownerService = require('../services/ownerService');


router.post('/createProgram', (req, res) => {
    const { goal, level, exercises } = req.body;
  
    // You can log the data to verify that you're receiving it correctly
    console.log('Received data:', goal, level, exercises);
  
    // Process the data as needed
    // For now, let's just echo it back in the response
    res.status(400).json({ goal, level, exercises });
   });

module.exports = router;