import express from 'express';
import {createBlog, singleBlog, allBlogs, updateBlog, deleteBlog} from '../controller/blogContr.js';
import { auth } from '../midleware/auth.js';
import { validateblog } from '../midleware/validation.js';
import {addComment, readComment} from '../controller/blogCommentContr.js';


const blogRouter = express.Router();


blogRouter.post('Blogs/comment', () => {
    console.log("hey what's wrong");
});
blogRouter.get('Blogs/comment/:_id', readComment);

blogRouter.post('/Blogs/Create', auth, validateblog, createBlog);

blogRouter.get('/Blogs', allBlogs);

blogRouter.get('/Blogs/Blog/:id', singleBlog);

blogRouter.put('/Blogs/Update/:id', updateBlog);

blogRouter.delete('/Blogs/Delete/:id', deleteBlog);



export default blogRouter;