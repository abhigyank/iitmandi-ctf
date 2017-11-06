var levels = require('../config/levels.js');
var evaluate = require('../config/evaluate.js');
var User = require('../model/user.js');

module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('index', {
			user: req.user
		});
	});
	 app.get('/signup', function(req, res) {
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
		failureMessage: 'Email already exists.'
	}));

	app.post('/login', function(req, res, next) {
		if (!req.isAuthenticated()){
			passport.authenticate('local-login', function(err, user, info) {
				if(err)
					return next(err);
				if(!user)
					return res.send('0');
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
        	var detail = levels(req.user.local.level);
        	res.send(detail);
    	}
    	else{
    		res.send("You aren't logged in.");
    	}
    });

	app.post('/evaluate', function(req, res) {
        // render the page and pass in any flash data if it exists
        if(req.isAuthenticated()){
        	var response = evaluate(req.body.key, req.user);
        	if(response){
        		//Updating level of user
        		User.findOneAndUpdate({'local.email': req.user.local.email}, {$inc: {'local.level' : 1}}, {multi: false }, function(err, user){
		    		if(err || !user){
		        		res.send("Something went wrong.");
			    		console.log(err);
			    	}
		    		else{
		        		res.send("Correct key.<br> You're now on level " + (user.local.level+1));
				    	req.user.local.level=user.local.level + 1;
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

	app.get('/level-1', isLoggedIn, function(req, res) {
        res.render('level-1', {
        	key: req.user.local.password
        });
    });

	app.get('/level-dwitiya', isLoggedIn, function(req, res) {
    	res.cookie('level-2 in 1991 128-bit','11a98374ebec8e0c7a54751d2161804d', {path:'/level-dwitiya'});
    	res.render('level-2');

    });

	app.get('/lvl3', function(req, res) {
    	res.render('ans-to-lvl3', {no: 'hhello'});
    });
   	app.post('/l3', function(req, res) {
    	res.send('1');
   	});

   	app.post('/lvl3', function(req, res) {
    	res.send('The key to is level 3 is -> abhigyanrocks');
   	});

	app.get('/scoreboard', function(req, res) {
		User.find(function(err, users){
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
