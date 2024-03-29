const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = 3000;

mongoose.connect(`mongodb://localhost:27017/calistenics-app`)
    .then(() => {
        console.log('DB is connected');
        app.listen(port, () => {console.log(`The app is running on port ${port}`)});
    })
    .catch((err) => console.log('Error connecting to MongoDb: ', err));

mongoose.connection.on('error', (err) => console.log(err));