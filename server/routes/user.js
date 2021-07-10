import express from 'express';
const router = express.Router();

import { getUser, updateUser, deleteUser } from '../controllers/user.js';


// Get user
router.get('/:userId', getUser);
// Update user
router.put('/:userId', updateUser);
// Delete user
router.delete('/:userId', deleteUser);
// Follow user 
// Unfollow user

export default router;


