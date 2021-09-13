const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

//import routes
const cartRoutes = require('./routes/cartRoute');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(cartRoutes);

const PORT = 8000;
//nadun
//const DB_URL = 'mongodb+srv://nadun:nadun31@itp.ugni7.mongodb.net/remedi?retryWrites=true&w=majority'
const DB_URL = 'mongodb+srv://itpproject:projectpass@cluster0.ximc9.mongodb.net/Cart&Orders?retryWrites=true&w=majority';

//dulajthiwanka909@gmail.com


mongoose.connect(DB_URL)
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => console.log('DB connection error', err));




app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})