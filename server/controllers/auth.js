var User = require('../models/user');

exports.signup = function(req, res, next){

	var email = req.body.email;
	var password = req.body.password;
	User.findOne({email: email}, function(err, existingUser){
		if(err) {
			return next(err);
		}// handle search error
		if(existingUser){
			return res.status(418).send(err);
			//alternative: return res.status(418).send("email is in use");
		}

		var user = new User({
			email: email,
			password: password
		});

		//To save the record to the DB
		user.save(function(err){
			if(err) {return next(err); }
		//4 Respond to request indicating the user was created
			res.json({success:true});
		});
	});
}