const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require ('bcrypt');


const registerStrategy = new LocalStrategy({ passReqToCallback: true }, (req, username, password, done) => {
    const db = req.db;

    db.query(`
       select * from "Users"
       where username ilike \${username}
    `, { username })
          .then(users => {
              if(users.length > 0) {
                  return done (' Username or email is alrerady in use');
              }

              bcrypt.hash(password, 15, (err, hashedPassword) => {
                  if(err){
                      return done ('System failure');
                  }

                  db.Users.insert({
                      ...req.body,
                      password: hashedPassword,
                  })
                  .then(user => {
                      delete user.password;

                      done(null, user);
                  }).catch(err => {
                      console.warn(err);
                      done('System failure');
                  });
              });
          }).catch(err => {
                console.warn(err);
                done('System failure');
            });


});

module.exports = {
    registerStrategy,
};