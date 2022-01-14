module.exports = {
    getAll,
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