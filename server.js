const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");


const connectDB = require('./server/database/connection');

const app = express();



dotenv.config();
const PORT = process.env.PORT

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();
// console.log(__dirname)

// parse request to body-parser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))



// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });