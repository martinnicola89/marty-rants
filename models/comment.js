const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    body: String,
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    user: String,
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Comment', commentSchema);