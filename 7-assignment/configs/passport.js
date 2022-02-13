require('dotenv').config();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

passport.use(new FacebookStrategy({
  clientID: process.env.ID,
  clientSecret: process.env.SECRET_KEY,
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'email'] 
},
function(accessToken, refreshToken, profile, done) {    
    User.findOne({ 'uid' : profile.id }, function(err, user) {
        
        // if there is an error, stop everything and return that
        if (err)
            return done(err);

        if (user) {
            return done(null, user); // user found, return that user
        } else {
            // if there is no user found with that facebook id, create them
            var newUser = new User();
            newUser.userId = profile.id;                   
            newUser.name  = profile.displayName; 
            newUser.email = profile.emails[0].value; 
            newUser.save(function(err) {
                if (err)
                    throw err;

                return done(null, newUser);
            });
        }

    });

}));


passport.serializeUser(function(user, done) {
    done(null, user.id); // user.id is the primary key in the database
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){ 
        done(err, user);
    });
    return done(null, id);
});
