import express from 'express';
const router = express.Router();

import { createPost, updatePost, deletePost, likePost, getPost } from '../controllers/post.js';

// Create a post
router.post('/', createPost);
// Update a post
router.put('/:postId', updatePost);
// Delete a post
router.delete('/:postId', deletePost);
// Like a post 
router.post('/:postId/like', likePost);
// Get a post
router.get('/:postId', getPost);
// Get timeline posts

export default router;


