import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import { users, posts } from './config/data.js';
import User from './models/userModel.js';
import Post from './models/postModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Post.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleposts = posts.map(post => {
			return { ...post, user: adminUser };
		});

		await Post.insertMany(sampleposts);

		const populatePosts = async () => {
			let allPosts = await Post.find({});

			for (const post of allPosts) {
				const user = await User.findById(post.user);
				user.posts.push(post);
				user.save();
			}
		};
		await populatePosts();

		let admin = await User.findById(adminUser);
		console.log(admin);
		// await User.findById(adminUser).populate('posts');
		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`ERROR: ${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Post.deleteMany();
		await User.deleteMany();

		console.log('Data Destroyed!'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`ERROR: ${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
