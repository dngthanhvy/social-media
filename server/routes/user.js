import express from 'express';
const router = express.Router();

import { getUser, updateUser, deleteUser, followUser, unfollowUser } from '../controllers/user.js';

// Get user
router.get('/:userId', getUser);
// Update user
router.put('/:userId', updateUser);
// Delete user
router.delete('/:userId', deleteUser);
// Follow user 
router.put('/:userId/follow', followUser);
// Unfollow user
router.put('/:userId/unfollow', unfollowUser);

export default router;


