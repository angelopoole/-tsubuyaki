import express from 'express';
const router = express.Router();
import { getUsers, getUserById } from '../controllers/userController.js';
// :id = var
router.route('/').get(getUsers);

router.route('/:id').get(getUserById);

export default router;
