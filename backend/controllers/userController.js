import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

// @desc    :create user:
// @route   ::
// @access  ::

// @desc    :get user by id:
// @route   ::
// @access  ::

// @desc    :delete user:
// @route   ::
// @access  ::

// @desc    :update user:
// @route   ::
// @access  ::

export { getUsers };
