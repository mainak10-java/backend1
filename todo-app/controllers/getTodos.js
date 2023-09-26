const Todo = require('../models/Todo')

exports.getTodos = async(req, res) =>{
    try{
        const todos = await Todo.find({});
        res.status(200).json({
            success : true,
            data : todos,
            message : 'Entire todo data is fetched'
        })
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success : false,
            message : e.message,
            data : 'Internal server error'
        })
    }
}

//Extracts todos on the basis of id

exports.getTodoById = async(req, res) =>{
    try{
        const id = req.params.id;
        const todo = await Todo.find({_id: id});
        
        // Data for given id not found
        if(!todo){
            return res.status(404).json({
                success : false,
                message : 'No data found with the id'
            })
        }

        res.status(200).json({
            success : true,
            data : todo,
            message : `Data successfully fetched for ${id}`
        })
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success : false,
            message : e.message,
            data : 'Internal server error'
        })
    }
}