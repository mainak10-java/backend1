// import the todo schema
const Todo = require('../models/Todo')

//define route handler
exports.createTodo = async(req, res) => {
    try{
        const {title, description} = req.body;

        // Create a new Todo object and insert it in the DB
        const response = await Todo.create({title, description});

        //Send a json response with a success flag
        res.status(200).json({
            success : true,
            data : response,
            message : 'Entry created successfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success : false,
            data : 'Internal server error',
            message : err.message
        })
    }
}