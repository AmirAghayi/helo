const express = require ('express');

const ApiRouter = express.Router();

ApiRouter.use((req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).send({ message: 'You must be logged in in order to access this resource' });
    }

    next();
});

ApiRouter.get( '/posts' , (req,res) => {
    const db = req.db;

    db.get_posts()
    .then(posts => {
        return Promise.all(
            posts.map(post => {
                return db.Users.find(post.user_id);
            })
        )
        .then(users => {
            return posts.map((post, i) => {
                const user = users[i];
                delete user.password;
                post.user = user;
                return post;
            });
        });
    })
    .then( response => {
        console.log('get posts', response)
      res.status(200).send(response);
    }).catch(err => {
        console.log('getPosts', err)
    });
});

ApiRouter.post('/post', (req,res) => {
    const {title,imageUrl,content } = req.body;
    const db = req.db;

    db.create_posts([title,imageUrl,content])
    .then( response => {
        res.status(200).send('Posted');
    }).catch(err => {
        console.log('newPost', err)
    });

});

ApiRouter.get('/me', (req, res) => {
    console.log(req.user)
    res.send(req.user)
});

module.exports = {
    ApiRouter,
};
