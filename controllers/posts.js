module.exports = {
    index,
    new: getForm,
    create: createPost,
    show: getOnePost,
    edit: getEditForm,
    update: updatePost,
    delete: deletePost
}

let Post = require('../models/post');

function index(req, res, next) {
    res.render('posts/index', { posts: Post.getAll() });
}

function getForm(req, res, next) {
    res.render('posts/new');
}

function createPost(req, res, next) {
    req.body.id = Math.floor(Math.random()*10000);
    Post.getAll().push(req.body);    
    res.redirect('/posts');
}

function getOnePost(req, res, next) {
    let post = Post.getOne(req.params.id)
    console.log(post);
    res.render('posts/show', { post })
}

function getEditForm(req, res, next) {
    let post = Post.getOne(req.params.id)
    res.render('posts/edit', { post });
}

function updatePost(req, res, next) {
    Post.updateOne(req.params.id, req.body);
    res.redirect(`/posts/${req.params.id}`)
}

function deletePost(req, res, next) {
    Post.deleteOne(req.params.id);
    // Post.getAll() = Post.getAll().filter(post => post.id != parseInt(req.params.id))
    res.redirect('/posts');
}