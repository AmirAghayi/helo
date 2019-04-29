// module.exports = {

//     getPosts: (req,res) => {
//        const {title, imageUrl, content } = req.body;
//        const db = req.app.get('db')

//        db.get_posts()
//        .then( response => {
//            console.log('get posts', response)
//          res.status(200).send(response);
//        }).catch(err => {
//            console.log('getPosts', err)
//        });
//     },
    
//     newUser: (req,res) => {
//         console.log(req.body)
//         const {username,password} = req.body;
//         const db = req.app.get('db')

//         db.create_user([username,password])
//         .then(response => {
//             res.status(200).send(response[0]);
//         }).catch(err => {
//             console.log('newUser', err)
//         });
//     },

//     newPost: (req,res) => {
//         const {title,imageUrl,content } = req.body;
//         const db = req.app.get('db')

//         db.create_posts([title,imageUrl,content])
//         .then( response => {
//             res.status(200).send('Posted');
//         }).catch(err => {
//             console.log('newPost', err)
//         });

//     },

//     userLogin: (req,res) => {
//         const db = req.app.get('db')
//         const {username,password} = req.body;

//         db.user_login([username,password])
//         .then( response => {
//             console.log('userlogin-response', response)
//             response.length !== 0 ? 
//             res.status(200).send(response[0])
//             : 
//             res.status(500).send({error: "user does not exist!"})

//         }).catch(err => {
//             console.log('userLogin', err)
//         });

//     }







// }