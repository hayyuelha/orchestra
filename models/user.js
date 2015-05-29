var mongoose = require('../config/mongoose.js');
var sha1 = require('sha1');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  //dropDups : drop duplicate records
  username: { type: String, required: true, unique: true, dropDups: true},
  password: { type: String, required: true},
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true, dropDups: true}
});

/**
 * attach password validation ke instance dari User
 * cara panggil: user.validPassword(password)
 */
userSchema.methods.validPassword = function(password){
  return sha1(password) == this.password;
}

var User = mongoose.model('User',userSchema);

module.exports = User;