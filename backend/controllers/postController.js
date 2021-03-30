import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// @desc    :Get all posts:
// @route   :Get /api/posts:
// @access  :Public:
const getPosts = asyncHandler(async (req, res) => {
	const posts = await Post.find({});
	res.json(posts);
});

export { getPosts };
