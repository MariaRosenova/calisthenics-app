const router = require('express').Router();
const trainingController = require('./controllers/trainingController');
const authController = require('./controllers/trainingController');
const ownerController = require('./controllers/ownerController');

// router.get('/api/training/getWorkoutPlans', (req, res) => {
//     res.status(200).json({'workoutPlans': []}); // Assuming an empty array for workout plans
//  });
 
 
router.use('/training/', trainingController);

router.use(authController);

router.use(ownerController);

router.use('*', (req, res) => {
    res.status(404)
        .json(
            {
                error: 'Not Found',
                message: 'Sorry, the requested resource was not found.'
            });
});

module.exports = router;