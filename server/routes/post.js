import express from 'express';
const router = express.Router();

import { createPost, updatePost, deletePost, likePost, getPost, getTimeline } from '../controllers/post.js';

router.post('/', createPost);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);
router.post('/:postId/like', likePost);
router.get('/:postId', getPost);
router.get('/timeline', getTimeline);

export default router;


