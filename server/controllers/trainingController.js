const router = require('express').Router();

router.get('/training', (req, res) => {
    res.json('Hello World!');
})
module.exports = router;