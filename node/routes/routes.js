import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'
const router = express.Router()

//haciendo las rutas de enrutamiento
router.get('/',getAllBlogs)
router.get('/',getBlog)
router.post('/',createBlog)
router.put('/:id', updateBlog)
router.delete('/:id',deleteBlog)

export default router
