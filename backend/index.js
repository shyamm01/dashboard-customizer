// importing express module
const express = require("express");
const userRouter = require('./routers/userRouter');
const orderRouter = require('./routers/orderRouter');
const cors = require('cors');


// initializing express
const app = express();
const port = 5000;

app.use( cors({
  origin : [ 'http://localhost:3001' ]
}) );

// to parse json data to javascript
app.use(express.json());

// using middleware
app.use('/user', userRouter);
app.use('/order', orderRouter);

// route
app.get('/', (req, res) => {
    // send function is used for string response
    res.send('request accepted');
});

app.get('/home', (req, res) => {
    res.send('response from home');
});

// app.get('/add', (req, res) => {
//     res.send('add request');
// });

// starting the server
app.listen(port, () => {
  console.log("express server started")
})