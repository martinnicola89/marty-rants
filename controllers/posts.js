module.exports = {
    index,
    new: getForm,
    create: createPost,
    show: getOnePost,
}

let Post = require('../models/post');

function index(req, res, next) {
    res.render('posts/index', { posts: Post.getAll() });
}

function getForm(req, res, next) {
    res.render('posts/new');
}

function createPost(req, res, next) {
    Post.create(req.body);
    res.redirect('/posts');
}

function getOnePost(req, res, next) {
    let post = Post.getOne(req.params.id)
    res.render('posts/show', { post })
}