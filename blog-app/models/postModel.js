 const mongoose = require('mongoose')

 const postSchema = new mongoose.Schema({
    author : {
        type : String,
        required : true,
        maxLength : 20
    },
    title : {
        type : String,
        required : true,
        maxLength : 50
    }, 
    description : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now()
    },
    updatedAt : {
        type : Date,
        required : true,
        default : Date.now()
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like"
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }]
 })

 module.exports = mongoose.model('Post', postSchema)