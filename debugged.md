1. blog.js: Changed the following to make them call back functions and not strings:

        router.post('/blog', 'createBlog');
        router.get('/blogs', 'getAllBlogs');
        router.get('/blog/:id', 'getBlogById');
        router.get('/blog/:id', 'updateBlog');
        router.delete('/blog/:id', 'deleteBlog');

2. blog.js: changed allBlogs and getAllBlogs to getBlogs to match the controller.

3. app.js: added -
        
        const mongoose = require('mongoose');


4. Adds .env file with the following code

        PORT = 8000
        MONGODB_URI = 'mongodb://localhost/jesse-node-final'

5.  app.js:  Adds  `require('dotenv').config()` above mongoose code

6.  blog.js:  `const Blog = require('../models/Blog')` no longer needed in route

7.  models/Blog.js:  Adds `const Schema = mongoose.Schema;` 
8.  models/Blog.js: Adds  `new Schema` before schema

9.  blog.js:  Change method for `updateBlog` from Get to Put
10. BlogController.js:  adds `.then((blog)=>{` to delete method
11. BlogController.js: adds `return` to all the methods
12. BlogController.js: adds error handling and validation to all the methods