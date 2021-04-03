import express from 'express';
const router = express.Router();
import {
	getUsers,
	getUserById,
	createUser,
} from '../controllers/userController.js';
// :id = var
router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUserById);

export default router;
