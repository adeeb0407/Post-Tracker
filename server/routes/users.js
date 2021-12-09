import express from 'express';
import {fetchUsers, createUser } from '../controller/users.js';

const router = express.Router();

router.get('/', fetchUsers); //http://localhost:5000/users
router.post('/add', createUser); //http://localhost:5000/users/add

export default router;
