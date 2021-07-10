import express from 'express';
const router = express.Router();

import { authRegister, authLogin } from '../controllers/auth.js';

router.post('/register', authRegister);
router.post('/login', authLogin);

export default router;


