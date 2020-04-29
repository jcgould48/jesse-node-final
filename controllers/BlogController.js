const Blog = require('../models/Blog');

module.exports = {
  getBlogs: (req, res) => {
    Blog.find({}).then((blogs) => {
      return res.json(blogs);
    });
  },


  createBlog: (req, res) => {
    const { title, author, subject, article } = req.body;

  if (!title || !author ||!subject ||!article) {
    return res.status(500).json({ message: 'All Inputs must be filled' });
  }

  Blog.findOne({ author: req.body.author })
    .then(blog => {
      if (blog) {
        return res
          .status(500)
          .json({ message: 'Blog already exists' });
      }
    const newBlog = new Blog();
    newBlog.title = req.body.title;
    newBlog.author = req.body.author;
    newBlog.subject = req.body.subject;
    newBlog.article = req.body.article;
    newBlog.save().then((blog) => {
      return res.status(200).json({message: 'Success', blog});
    }).catch(err => res.status(500).json(err));
  })
  .catch(err => res.status(500).json({ message: 'Server Error' }, err));
  },

  getBlogById: (req, res) => {
    Blog.findById({ _id: req.params.id }).then((blog) => {
      if(blog){
        return res.json(blog)
      }else {
        res.json({ message: 'Blog not found' });
      }
    });
  },

  updateBlog: (req, res) => {
    Blog.findById({ _id: req.params.id }).then((blog) => {
      if(blog){
      blog.author = req.body.author ? req.body.author : blog.author;
      blog.title = req.body.title ? req.body.title : blog.title;
      blog.subject = req.body.subject ? req.body.subject : blog.subject;
      blog.article = req.body.article ? req.body.article : blog.article;
      blog.save().then((blog) =>{ 
        return res.status(200).json({message: 'Blog Updated', blog})
    })
      .catch(err =>
        res.status(500).json({ message: 'Unable to update blog', err })
      );
    } else {
      res.json({ message: 'Cannot find blog' });
    }
    });
  },


  deleteBlog: (req, res) => {
    Blog.findByIdAndDelete({ _id: req.params.id }).then((blog)=>{
      return res.json({ message: 'deleted' })
    })
    .catch(err => res.status(500).json({ message: 'Problem deleting', err }));
  },
};
