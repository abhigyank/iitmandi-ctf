var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	local : {
		email: String,
		name: String,
		roll: String,
		password: String,
		levels: [Number],
		hints: [Number],
		verified: Number,
		time: Date,
		score: Number
	}
});

//generating password hash
userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
