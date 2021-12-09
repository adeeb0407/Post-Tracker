import express from 'express';
import { fetchPost, fetchPosts, createPost, deletePost, updatePost  } from '../controller/posts.js';

const router = express.Router();

router.get('/', fetchPosts); //http://localhost:5000/posts
router.get('/:id', fetchPost);
router.post('/add', createPost); //http://localhost:5000/posts/add
router.delete('/:id', deletePost); //http://localhost:5000/posts/id
router.patch('/update/:id', updatePost); //http://localhost:5000/update/id

export default router;

