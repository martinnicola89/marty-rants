module.exports = {
    create: createComment,
}

let Comment = require('../models/comment');

async function createComment(req, res) {
    req.body.post = req.params.id;
    req.body.user = req.user.name;
    Comment.create(req.body);
    res.redirect(`/posts/${req.params.id}`);
}