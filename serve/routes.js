var levels = require('../config/levels.js');
var hints = require('../config/hints.js');
var evaluate = require('../config/evaluate.js');
var User = require('../model/user.js');

module.exports = function(app, passport){
    
    // Homepage
    app.get('/', function(req, res){
		if(contestEnded()) {
				res.send('Contest Ended.');
				return;
		}
		res.render('index', {
			user: req.user
		});
		// res.redirect('scoreboard');
    });
    
    // Signup page
	 app.get('/signup', function(req, res) {
        if(!req.isAuthenticated()){
			res.render('signup', { errors: req.session.messages || [] });
			req.session.messages = [];
    	}
    	else{
    		res.redirect('/');
    	}
    });

    // Singup form on the signup page
	app.post('/signup',passport.authenticate('local-signup',{successRedirect: '/', failureRedirect: '/signup', failureMessage: 'Email already exists or you aren\'t using IIT Mandi email.'}));

    // Login on the homepage
	app.post('/login', function(req, res, next) {
		if (!req.isAuthenticated()){
			passport.authenticate('local-login', function(err, user, info) {
				if(err)
					return next(err);
				if(!user)
					return res.send('0');
				if(!user.local.verified){
					return res.send({ value : '2'});
				}
				req.login(user, function(err){
	 			   if(err){
	   					return next(err);
	 				}
					return res.send({ value : '1', name : user.local.name });
				});
			})(req, res, next);
		}
		else{
			res.send('0');
		}
    });
    
    // Execute a level on homepage
	app.post('/execute', isLoggedIn, function(req, res) {
        if(contestEnded()) {
				res.send('Contest Ended, reload page.');
				return;
		}
        if(req.isAuthenticated()){
			/* Comment next two lines post signup starts and before contest starts. You can uncomment the third line after this. */
			// console.log(contestStarted());
			if(contestStarted() || req.user.local.email == "test@test") {
				var detail = levels(Number(req.body.level));
				res.send(detail);					
	        } 
	        else {
	        	res.send("This will work only after email validation happens and CTF starts!");
   			}
    	}
    	else{
    		res.send("You aren't logged in.");
    	}
    });

    // Hint for a level on homepage
    app.post('/hints', isLoggedIn, function(req, res) {
        if(!contestStarted() && req.user.local.email != "test@test") {
            res.send("This will work only after email validation happens and CTF starts!");
            return;
        }
        if(contestEnded()) {
            res.send('Contest Ended, reload page.');
            return;
        }

        if(req.isAuthenticated()){
			var detail = hints(Number(req.body.level));
			if (req.user.local.hints.includes(Number(req.body.level))) {
				res.send(detail);
				return;
			}
			else {
				User.findOneAndUpdate({ 'local.email': req.user.local.email }, { $push: { 'local.hints': req.body.level } }, { multi: false }, function (err, user) {
					if (err || !user) {
						res.send("Something went wrong.");
						console.log(err);
					}
					else {
						res.send(detail);
						req.user.local.hints.push(req.body.level);
					}
				});
			}
        }
        else{
            res.send("You aren't logged in.");
        }
    });

    // Evaluate the key for a level on homepage
	app.post('/evaluate', isLoggedIn, function(req, res) {
    	if(!contestStarted() && req.user.local.email != "test@test") {
	    	res.send("This will work only after email validation happens and CTF starts!");
	    	return;
	    }
        if(contestEnded()) {
			res.send('Contest Ended, reload page.');
			return;
        }
         
        if(req.isAuthenticated()){
            if(req.user.local.levels.includes(Number(req.body.level) )) {
                res.send("Already accepted.");
                return;
            }
            var response = evaluate((req.body.key).trim(), Number(req.body.level));
            if(response){
                var d = new Date();
                var level_score = response;
                console.log(req.user.local.hints);
                if(req.user.local.hints.includes(Number(req.body.level))) level_score-= 0.2*response;
                User.findOneAndUpdate({'local.email': req.user.local.email}, {$push: {'local.levels' : req.body.level}, $set: {'local.time' : d}, $inc: {'local.score': level_score} }, {multi: false }, function(err, user){
                    if(err || !user){
                        res.send("Something went wrong.");
                        console.log(err);
                    }
                    else{
                        res.send("Correct key!<br>");
                        req.user.local.score += level_score;
                        req.user.local.time=new Date();
                        req.user.local.levels.push(req.body.level);
                    }
                });
            }
            else
                res.send("Incorrect key");
        }
    	else{
    		res.send("You aren't logged in.");
    	}
    });

    // Verify
	app.get('/verify',function(req, res) {
        var key = req.query.key;
        email = key.split(' ')[0];
        hash = key.split(' ')[1];
        User.find({"local.email": email}, function(err, users){
            if(err)
                return next(err);
            if(users[0].local.password.substring(30)==hash){
                User.update({"local.email": email},{$set : {"local.verified": 1}}, function(err, users){
                    res.send('Email Verified. <a href="/">Click here.</a>');
                });
            }
            else{
				console.log(email);
				console.log(hash);
				console.log(users[0].local.password.substring(30));
                res.send("Wrong verification!");
            }
        });
	});

    // Scorebord page
	app.get('/scoreboard', function(req, res) {
		if(!contestEnded){	
			User.find({}, null, {sort: {"local.score":-1, "local.time":1}}, function(err, users){
				if(err) throw(err);
				else{
					res.render('scoreboard', {
						users: users
					});
				}
			}).sort({'local.score': -1});
		} else {
			res.sendfile('finalscoreboard.html',{root:'views'});
		}
    });

    // Logout
	app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

	// Chall Files:

	app.get('/darkforest',function(req,res) {
		res.sendfile('darkforest',{root:'public/challs'});
	});

	app.get('/limbo',function(req,res) {
		res.sendfile('limbo.tar.gz',{root:'public/challs'})
	});

	app.get('/lust',function(req,res) {
		res.sendfile('lust.png',{root:'public/challs'})
	});

	app.get('/greed',function(req,res) {
		res.sendfile('greed.c',{root:'public/challs'})
	});

	app.get('/anger',function(req,res) {
		res.sendfile('medusalair.rar',{root:'public/challs'})
	});

	app.get('/heresy',function(req,res) {
		res.sendfile('heresy',{root:'public/challs'})
	});

	app.get('/violence',function(req,res) {
		res.sendfile('violence',{root:'public/challs'})
	});

	app.get('/violenceshlcode',function(req,res) {
		res.sendfile('violenceshlcode',{root:'public/challs'})
	});

	app.get('/fraud',function(req,res) {
		res.sendfile('fraud',{root:'public/challs'})
	});

	app.get('/treachery',function(req,res) {
		res.sendfile('treachery',{root:'public/challs'})
	});

	

    /* 
    	Sample routes for custom levels in separate pages (from 2019 contest).
    	The associated ejs files are availbable in views folder. 
    	Feel free tp remove them. 
	*/

	// app.get('/level2', isLoggedIn, function(req, res) {
    // 	res.render('level2');

    // });

	// app.get('/level1', isLoggedIn, function(req, res) {
    //     res.render('level1');
    // });

    /* 
    	Sample routes for custom levels in separate pages (from 2017 contest).
    	The associated ejs files are availbable in views folder. 
    	Feel free tp remove them. 
	*/
	// app.get('/lvl8', isLoggedIn, function(req, res) {
    // 	res.cookie('admin','false');
    // 	res.render('lvl8');
    // });
	// app.post('/l6', function(req, res) {
	// 	if(req.cookies['admin'] == "true") {
	// 		data = []
	// 		data.push(1);
	// 		data.push("Congrats! Flag is wtf{missed_party_yesterday}");
	// 		res.send(data);
	// 	}
	// 	else if(req.body.user != 'admin') {
	// 		data = []
	// 		data.push(1);
	// 		data.push("Logged in! But flag reserved for admin only.");
	// 		res.send(data);
	// 	}
	// 	else {
	// 		data = []
	// 		data.push(0);
	// 		data.push("Sorry wrong admin credentials.");
	// 		res.send(data);
	// 	}
	// });

 //   	app.post('/l3', function(req, res) {
 //    	res.send('1');
 //   	});

 //   	app.post('/lvl3', function(req, res) {
 //    	res.send('The key to is level 3 is -> abhigyanrocks');
 //   	});

	// app.get('/l6',function(req, res) {
	// 		res.render('l6');
	// });

	// app.post('/l6', function(req, res) {
	// 	if(req.body.user == "admin"){
	// 		str = req.body.password;
	// 		if(!isNaN(parseFloat(str)) && isFinite(str)){
	// 			data = [];
	// 			data.push(0);
	// 			data.push("Wrong username, password combination.");
	// 			res.send(data);
	// 			return;
	// 		}
	// 		try{
	// 			val = eval("'" + str + "'");
	// 			if(Number(val)){
	// 				data = []
	// 				data.push(1);
	// 				data.push("Logged in.")
	// 				data.push("The key is : securityisamyth")
	// 				res.send(data);
	// 			}
	// 			else{
	// 				data = [];
	// 				data.push(0);
	// 				data.push("Wrong username, password combination.");
	// 				res.send(data);
	// 			}
	// 		}
	// 		catch(e){
	// 			data = [];
	// 			data.push(0);
	// 			data.push("Wrong username, password combination.");
	// 			res.send(data);
	// 		}

	// 	}
	// });

    /* 
    	Sample routes for custom levels ends. 
	*/
};

function contestStarted() {
	return true;
}

function contestEnded() {
	return true;
}

function isLoggedIn(req, res, next) {
	if(contestEnded()) {
        res.redirect('/');
        return;
	}
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated() && req.user.local.verified) {
		return next();
	}
    // if they aren't redirect them to the home page
    res.redirect('/');
}
