var express = require('express');
var router = express.Router();
// const Blog = require('../models/Blog');

const {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/BlogController');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/blog', createBlog);

router.get('/blogs', getBlogs);

router.get('/blog/:id', getBlogById);

router.put('/blog/:id', updateBlog);

router.delete('/blog/:id', deleteBlog);

module.exports = router;
