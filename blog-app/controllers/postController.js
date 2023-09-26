const Post = require('../models/postModel')

exports.createPost = async(req, res) =>{
    try{
        const {author, title, description} = req.body;
        const post = new Post({
            author, title, description
        })

        const savedPost = await post.save();
        res.json({
            post : savedPost
        })
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

exports.getPosts = async(req, res) =>{
    try{
        const posts = await Post.find().populate('comments').populate('likes').exec();

        res.json({
            posts
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success : false,
            data : 'Could not fetch posts',
            message : err.message
        })
    }
}

