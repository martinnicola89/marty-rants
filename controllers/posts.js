module.exports = {
    index,
    new: getForm,
    create: createPost,
    show: getOnePost,
    delete: deletePost,
    edit: getEditForm,
    update: updatePost,
}

let Post = require('../models/post');
let Comment = require('../models/comment');
let User = require('../models/user');

async function index(req, res) {res.render('posts/index', { posts: await Post.find({}), user: req.user })};

function getForm(req, res) {
    if (req.user.email === "martinnicola89@gmail.com") {
        res.render('posts/new', {user: req.user});
    } else {
        res.redirect('/');
    }
}

function createPost(req, res) {
    Post.create(req.body);
    res.redirect('/posts');
}

async function getOnePost(req, res) {
    let comments = await Comment.find({post: req.params.id})
    Post.findById(req.params.id, (err, post) => {
        res.render('posts/show', {
            post, 
            comments,
            user: req.user
        })
    })
}

async function deletePost(req, res) {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
}

async function getEditForm(req, res) {
    res.render('posts/edit', {
        post: await Post.findById(req.params.id),
        user: req.user,
    });
}

async function updatePost(req, res) {
    let post = await Post.findById(req.params.id);
    post.subject = req.body.subject;
    post.body = req.body.body;
    post.save()
    res.redirect(`/posts/${post._id}`)
}