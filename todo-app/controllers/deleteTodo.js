const Todo = require('../models/Todo')

exports.deleteTodo = async(req, res) =>{
    try{
        const {id} = req.params;
        const {title, description} = req.body;

         await Todo.findByIdAndDelete({_id : id})
        
        res.status(200).json({
            success : true,
            message : 'Todo deleted Successfully'
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