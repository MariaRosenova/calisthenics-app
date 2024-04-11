const router = require('express').Router();
const trainingController = require('./controllers/trainingController');


router.use('/training/', trainingController);



router.use('*', (req, res) => {
    res.status(404)
        .json(
            {
                error: 'Not Found',
                message: 'Sorry, the requested resource was not found.'
            });
});

module.exports = router;