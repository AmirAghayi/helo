module.exports = {
    newUser: (req,res) => {
        console.log(req.body)
        const {username,password} = req.body;
        const db = req.app.get('db')

        db.create_user([username,password])
        .then(response => {
            res.status(200).send('All Good');
        }).catch(err => {
            console.log('newUser', err)
        })
    },

    newPost: (req,res) => {
        const {title,imageUrl,content } = req.body;
        const db = req.app.get('db')

        db.create_posts([title,imageUrl,content])
        .then( response => {
            res.status(200).send('Posted');
        }).catch(err => {
            console.log('newPost', err)
        });

    }







}