const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BlogSchema = new Schema({
  title: { type: String, default: '' },
  author: { type: String, default: '', unique: true },
  subject: { type: String, default: '' },
  article: { type: String, default: '' },
});

module.exports = mongoose.model('Blog', BlogSchema);
