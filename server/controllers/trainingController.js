const router = require('express').Router();
const trainingService = require('../services/trainingService');

//вече card ще има релация с workout
//workout ще има модел, който допълнително ще се извиква когато се използва и id-то
router.get('/training', (req, res) => {
    res.json('Hello World!');
    //get all workouts as card elements
});

//get one workout in detail
router.get('/create', async (req, res) => {
    // const id = '442djndds0';
    // const data = 'Hello I am working and you will be very successful';
    // await trainingService.createWorkout(id, data);
    res.json('Hey you are here')
})


//if you are admin /create
module.exports = router;