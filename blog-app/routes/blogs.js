const express = require('express')
const router = express.Router();

const {createComment} = require('../controllers/commentController')
const {createPost, getPosts} = require('../controllers/postController')
const {likePost, unlikePost} = require('../controllers/likeController')

router.post('/comment/createComment', createComment)
router.post('/post/createPost', createPost)
router.post('/likes/likePost', likePost)
router.get('/posts', getPosts)
router.post("/likes/unlike", unlikePost);




module.exports = router;