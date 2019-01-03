var levels = require('../config/levels.js');
var hints = require('../config/hints.js');
var evaluate = require('../config/evaluate.js');
var User = require('../model/user.js');

module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('index', {
			user: req.user
		});
		// res.redirect('scoreboard');
	});
	 app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
      //   if(!req.isAuthenticated()){
	    //     res.render('signup', { errors: req.session.messages || [] });
    	//     req.session.messages = [];
    	// }
    	// else{
    		res.redirect('/');
    });
	app.post('/signup',passport.authenticate('local-signup',{
		successRedirect: '/',
		failureRedirect: '/signup',
		failureMessage: 'Email already exists or you aren\'t using IIT Mandi email.  '
	}));

	app.post('/login', function(req, res, next) {
		if(req.body.email != 'guest@students.iitmandi.ac.in'){
			res.send('0');
			return;
		}
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

	app.post('/execute', function(req, res) {
        // render the page and pass in any flash data if it exists
        if(req.isAuthenticated()){
			// var detail = levels(req.user.local.level);
			var detail = levels(Number(req.body.level));
        	res.send(detail);
        	// res.send("This will work only after CTF starts!");
    	}
    	else{
    		res.send("You aren't logged in.");
    	}
    });

		app.post('/hints', function(req, res) {
	        // render the page and pass in any flash data if it exists
	        if(req.isAuthenticated()){
						var detail = hints(Number(req.body.level));
						res.send(detail);
						return;
						if(req.user.local.hints>=3 && req.user.local.points==0){
							res.send("Maximum 3 hints allowed. Sorry.");
							return;
						}
						if(req.user.local.points>=1){
							res.send(detail);
							return;
						}
						else{
							User.findOneAndUpdate({'local.email': req.user.local.email}, {$inc: {'local.points' : 1, 'local.hints' : 1 }}, {multi: false }, function(err, user){
					    		if(err || !user){
					        		res.send("Something went wrong.");
						    			console.log(err);
						    	}
					    		else{
											res.send(detail);
											req.user.local.points=1;
											req.user.local.hints+=1;
					    		}
					    	});
						}
	    	}
	    	else{
	    		res.send("You aren't logged in.");
	    	}
	    });

	app.post('/evaluate', function(req, res) {
        // render the page and pass in any flash data if it exists
        if(req.isAuthenticated()){
							var response = evaluate((req.body.key).trim(), req.body.level, req.user);
							if(response)
								res.send("Congrats! Correct key.");
							else 
								res.send("Try Harder. Incorrect key.");
							return;
							if(response){
									//Updating level of user
									var d = new Date();
									User.findOneAndUpdate({'local.email': req.user.local.email}, {$inc: {'local.level' : 1}, $set: {'local.time' : d, 'local.points' : 0} }, {multi: false }, function(err, user){
									if(err || !user){
											res.send("Something went wrong.");
										console.log(err);
									}
									else{
											res.send("Correct key.<br> You're now on level " + (user.local.level+1));
											req.user.local.level=user.local.level + 1;
											req.user.local.time=new Date();
											req.user.local.points=0;
									}
								});
								}
							else
								res.send("Incorrect key");
							// res.send("Incorrect key");
					}
    	else{
    		res.send("You aren't logged in.");
    	}
    });

	app.get('/level-1', isLoggedIn, function(req, res) {
        res.render('level-1', {
        	key: req.user.local.password
        });
    });
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
						res.send("Wrong verification!");
					}
				});

  });

	app.get('/level-dwitiya', isLoggedIn, function(req, res) {
    	res.cookie('level-2 in 1991 128-bit','11a98374ebec8e0c7a54751d2161804d', {path:'/level-dwitiya'});
    	res.render('level-2');

    });

	app.get('/lvl3', isLoggedIn, function(req, res) {
    	res.render('ans-to-lvl3', {no: 'hhello'});
    });
   	app.post('/l3', function(req, res) {
    	res.send('1');
   	});

   	app.post('/lvl3', function(req, res) {
    	res.send('The key to is level 3 is -> abhigyanrocks');
   	});

		app.get('/l6',function(req, res) {
				res.render('l6');
		});

		app.post('/l6', function(req, res) {
			if(req.body.user == "admin"){
				str = req.body.password;
				if(!isNaN(parseFloat(str)) && isFinite(str)){
					data = [];
					data.push(0);
					data.push("Wrong username, password combination.");
					res.send(data);
					return;
				}
				try{
					val = eval("'" + str + "'");
					if(Number(val)){
						data = []
						data.push(1);
						data.push("Logged in.")
						data.push("The key is : securityisamyth")
						res.send(data);
					}
					else{
						data = [];
						data.push(0);
						data.push("Wrong username, password combination.");
						res.send(data);
					}
				}
				catch(e){
					data = [];
					data.push(0);
					data.push("Wrong username, password combination.");
					res.send(data);
				}

			}
		});

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
