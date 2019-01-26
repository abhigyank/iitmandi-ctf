var levels = require('../config/levels.js');
var hints = require('../config/hints.js');
var evaluate = require('../config/evaluate.js');
var User = require('../model/user.js');

module.exports = function(app, passport){
	app.get('/', function(req, res){
		/*
			Comment the next three lines and uncommennt the 4th line to shutdown the contest
		*/ 
		res.render('index', {
			user: req.user
		});
		// res.redirect('scoreboard');
	});
	 app.get('/signup', function(req, res) {
    	/*
			Comment in this part to close signup.
		*/ 
	
        // render the page and pass in any flash data if it exists
        if(!req.isAuthenticated()){
	        res.render('signup', { errors: req.session.messages || [] });
    	    req.session.messages = [];
    	}
    	else{
    		res.redirect('/');
    	}
    });
	app.post('/signup',passport.authenticate('local-signup',{
		successRedirect: '/',
		failureRedirect: '/signup',
		failureMessage: 'Email already exists or you aren\'t using IIT Mandi email.  '
	}));

	app.post('/login', function(req, res, next) {
		if (!req.isAuthenticated()){
			passport.authenticate('local-login', function(err, user, info) {
				if(err)
					return next(err);
				if(!user)
					return res.send('0');
				/*
					Email verification emails have to send manually as of now, so in you comment the next if condition if you don't 
					want to send verification emails manually
				*/ 
				// if(!user.local.verified){
				// 	return res.send({ value : '2'});
				// }
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

	app.post('/execute', function(req, res) {
        // render the page and pass in any flash data if it exists
        if(req.isAuthenticated()){
        	/* Comment next two lines post signup starts and before contest starts. You can uncomment the third line after this. */
			// var detail = levels(req.user.local.level);
        	// res.send(detail);
        	res.send("This will work only after email validation happens (26 Jan) and CTF starts!");
    	}
    	else{
    		res.send("You aren't logged in.");
    	}
    });

		app.post('/hints', function(req, res) {
	        // render the page and pass in any flash data if it exists
        	res.send("This will work only after email validation happens (26 Jan) and CTF starts!");
        	return;
	        if(req.isAuthenticated()){
						var detail = hints(req.user.local.level);
						if(req.user.local.hint_taken == true){
							res.send(detail);
							return;
						}
						if(req.user.local.hints>=3){
							res.send("Maximum 3 hints allowed. Sorry.");
							return;
						}
						else{
							User.findOneAndUpdate({'local.email': req.user.local.email}, {$set: {'local.hint_taken' : true} }, {multi: false }, function(err, user){
					    		if(err || !user){
					        		res.send("Something went wrong.");
						    			console.log(err);
						    	}
					    		else{
											res.send(detail);
											req.user.local.hint_taken=true;
					    		}
					    	});
						}
	    	}
	    	else{
	    		res.send("You aren't logged in.");
	    	}
	    });

	app.post('/evaluate', function(req, res) {
    	res.send("This will work only after email validation happens (26 Jan) and CTF starts!");
    	return;
        // render the page and pass in any flash data if it exists
        if(req.isAuthenticated()){
							var response = evaluate((req.body.key).trim(), req.user);
							if(response){
									//Updating level of user
									var d = new Date();
									var inc_hint = 0;
									if(req.user.local.hint_taken) inc_hint = 1;
									User.findOneAndUpdate({'local.email': req.user.local.email}, {$inc: {'local.level' : 1, 'local.hints' : inc_hint}, $set: {'local.time' : d, 'local.hint_taken' : false} }, {multi: false }, function(err, user){
										if(err || !user){
												res.send("Something went wrong.");
											console.log(err);
										}
										else{
												res.send("Correct key.<br> You're now on level " + (user.local.level+1));
												req.user.local.level=user.local.level + 1;
												req.user.local.time=new Date();
												req.user.local.hint_taken=false;
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


	app.get('/verify',function(req, res) {
    	res.send("This will work only after email validation happens (26 Jan) and CTF starts!");
    	return;
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
						res.send("Wrong verification!");
					}
				});

  });

    /* 
    	Sample routes for custom levels in separate pages (from 2017 contest).
    	The associated ejs files are availbable in views folder. 
    	Feel free tp remove them. 
	*/

	app.get('/level-1', isLoggedIn, function(req, res) {
	    res.render('level-1');
    });

	app.get('/dwitiya-charan', isLoggedIn, function(req, res) {
		res.render('dwitiya-charan');
    });

	app.get('/lev-3', isLoggedIn, function(req, res) {
		res.render('lvl-3');
    });

	app.get('/lev3_flag', isLoggedIn, function(req, res) {
		let data = {
			string : "You're not a the search engine of my dreams! Don't fool me."
		}
		if(req.get('User-Agent').includes("Mozilla/5.0") && req.get('User-Agent').includes("bingbot/2.0")){
			data.string = "ctciitmandi{Ple@se_u$e_b!ng_too}";
		}
		res.send(data);
    });

    /* 
    	Sample routes for custom levels ends. 
	*/

	app.get('/scoreboard', function(req, res) {
		// User.find().sort({"local.level":-1, "local.time":1}).exec(function(err, users){
		User.find({}, null, {sort: {"local.level":-1, "local.hints":1, "local.time":1}}, function(err, users){
			if(err) throw(err);
			else{
		        res.render('scoreboard', {
		        	users: users
		        });
			}
		}).sort({'local.level': -1});
    });

	app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
