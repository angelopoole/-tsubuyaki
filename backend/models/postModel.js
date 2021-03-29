import mongoose from 'mongoose';

const userWhoLikedSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
});

const userCommentSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	text: {
		type: String,
		required: true,
		max: [260, 'Character limit reached'],
	},
});

const postSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	text: {
		type: String,
		required: true,
		max: [260, 'Character limit reached'],
	},
	likes: {
		type: [userWhoLikedSchema],
	},
	comments: {
		type: [userCommentSchema],
	},
	datePosted: {
		type: Date,
		default: Date(),
	},
});

const Post = mongoose.model('Post', postSchema);

export default Post;
