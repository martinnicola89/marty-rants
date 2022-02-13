const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  headline: String,
  imgLink: String,
  subject: String,
  body: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);