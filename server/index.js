const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:4200', credentials: true }));

app.use('/api', routes);

mongoose.connect(`mongodb://127.0.0.1:27017/calisthenics-app`)
    .then(() => {
        console.log('DB is connected');
        app.listen(port, () => {console.log(`The app is running on port ${port}`)});
    })
    .catch((err) => console.log('Error connecting to MongoDb: ', err));

mongoose.connection.on('error', (err) => console.log(err));