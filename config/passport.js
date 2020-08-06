var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/user.js');
var mailer = require('./sendmail.js')

module.exports = function(passport){
	// required for persistent login session

	// used to serialize the user
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	// used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },function(req, email, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.email' :  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (user) {
                return done(null, false);
            } else {
                if(email.split('@')[1] !=="students.iitmandi.ac.in" || email.split('@')[0].substring(1)!==req.body.roll.substring(1)){
                    return done(null, false);
                }

                // if there is no user with that email
                // create the user
                var newUser = new User();

                // set the user's local credentials
                newUser.local.email    = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.local.name = req.body.name;
                newUser.local.roll = req.body.roll;
				newUser.local.levels = [];
				newUser.local.hints = [];
				newUser.local.score = 0;
				newUser.local.verified = 1; //
                newUser.local.time = new Date;
                // save the user
                newUser.save(function (err) {
                    if (err) throw err;
                    // mailer.verify(newUser.local.email,newUser.local.password.substring(30));
                    // console.log('Done!!!')
                    return newUser;
                });

            }

        });

        });

    }));

    passport.use('local-login', new LocalStrategy({
    	usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },function(req, email, password, done){
    	User.findOne({'local.email' : email }, function(err, user){
    		if(err)
    			return done(err);
    		if(!user || !user.validPassword(password))
    			return done(null, false);
    		return done(null, user);
    	});
    }))	;

};
