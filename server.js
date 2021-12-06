const express = require('express') //backend framework
const mongoose = require('mongoose') //orm to interact with mongodb db; can also use mongodb driver
const bodyParser = require('body-parser') //allows us to take requests and get data from the body; instance : when we send a post req., we want to be able to get the name of that post from the request

const items = require('./routes/api/items') //for the items file to work, we require it

const app = express(); //initialise express in a variable

//Bodyparser Middleware
app.use(bodyParser.json())

// mongodb uri to connect to mongodb
//db config
const db = require('./config/keys').mongoURI

//connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true }) //promise based; passing db object
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

// use routes
app.use('/api/items', items) // anything that goes to /api/items should refer to the items variable, which is the file


// variable for the port
const port = process.env.PORT || 5000 // port is a environmental var

app.listen(port, () => console.log(`Server started on port ${port}`))