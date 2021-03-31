import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	debugger;
	console.log('get all users');
	res.json(users);
});

// @desc    :create user:
// @route   ::
// @access  ::

// @desc    :get user by id:
// @route   ::
// @access  ::
const getUserById = asyncHandler(async (req, res) => {
	const userId = req.params.id;
	const user = await User.findById(userId);
	console.log(userId);
	debugger;
	if (user) {
		res.json(user);
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    :delete user:
// @route   ::
// @access  ::

// @desc    :update user:
// @route   ::
// @access  ::

export { getUsers, getUserById };
