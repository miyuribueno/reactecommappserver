const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');

app.use(cors());
app.use(bodyParser.json());

const url = "mongodb+srv://db15566:5566@db1.vb0gm.mongodb.net/ecommerce_app?retryWrites=true&w=majority"
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

//user
const userRouter = require('./routes/userRouter');
app.use('/users', userRouter);

const itemRouter = require('./routes/itemRouter.js');
app.use('/items', itemRouter);

const orderRouter = require('./routes/orderRouter');
app.use('/orders', orderRouter);


app.listen (process.env.PORT || port, ()=> console.log(`Listening on port ${port}!`));