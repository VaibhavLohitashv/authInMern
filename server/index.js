const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');


const app = express();

// DB connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Database Connnected');
    })
    .catch((error) => {
        console.log('Database NOT Connected', error);
    })


// middleware

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
// Hosting and routing

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})