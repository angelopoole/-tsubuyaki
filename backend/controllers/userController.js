import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	debugger;

	res.json(users);
});

// @desc    :Register new user:
// @route   :/api/users:
// @access  :Public:
const createUser = asyncHandler(async (req, res) => {
	// form inputs require username and password to create a base profile.
	//name is changeable, username is not.
	const { username, name, email, password } = req.body;
	console.log(name, username, email, password);
	console.log(req);
});

// @desc    :get user by id:
// @route   ::
// @access  ::
const getUserById = asyncHandler(async (req, res) => {
	const userId = req.params.id;
	const user = await User.findById(userId);
	console.log(req.params);
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

export { getUsers, getUserById, createUser };
