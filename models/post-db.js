module.exports = {
    getAll,
    getOne,
    create,
}

let posts = [
    {
        id: 0,
        subject: 'Food',
        body: 'My ex loved pad thai. I did not. That is why she is my ex.'
    },
    {
        id: 1,
        subject: 'Lifestyle',
        body: 'She broke up with me because I always left the seat up.'
    }
]

function getAll() {
    return posts;
}

function getOne(id) {
    let correctPost;
    // console.log(typeof id);
    posts.forEach(function(post) {
        if (id === post.id.toString()) {
            // console.log(typeof post.id);
            correctPost = post;
        }
    })
    return correctPost;
}

function create(body) {
    body.id = Math.floor(Math.random()*10000);
    posts.push(body);
}