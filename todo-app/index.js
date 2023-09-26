const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Middleware to parse json body

app.use(express.json());

// Import routes for TODO API
const todoRoutes = require('./routes/todos');

// Mount the todo api routes
app.use('/api/v1', todoRoutes)

app.listen(PORT , () =>{
    console.log(`Server started at ${PORT}`)
})

// Connect to the database
const dbConnect = require('./config/database');
dbConnect();

// Default Route
app.get('/', (req,res) =>{
    res.send('This is homepage')
})