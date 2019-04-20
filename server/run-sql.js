require ('dotenv').config({ path: __dirname + '/.env'});
const massive = require ('massive');


let db;


massive( process.env.DB_CONNECTION_STRING, { scripts: __dirname + '/db/scripts'})
   .then( dbInstance => {
       db = dbInstance;
       return db.setup.create_user();
   })
   .then(() =>{
       return db.setup.create_posts();
   })
   .then(() => {
       console.log('set up ran successfuly');
   })
   .catch( err => {
       console.error(err);
   });