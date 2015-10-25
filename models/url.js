var mongoose = require('mongoose'),
 Schema = mongoose.Schema,
 validator = require('validator');

var UrlSchema = new Schema({
    link: { type: String, required: true,lowercase: true, validate:validateUrl},
    shortenedLink: { type: String },
    createDate: {type:Date, default:Date.now}
});

 function validateUrl(str){
  return true;
 }


//custome method for verifying pass
// UserSchema.methods.verifyPassword = function(password, cb) {
//   bcrypt.compare(password, this.password, function(err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

//custome method for check if mail exist. returns false or true
// UserSchema.methods.isEmailExist = function(email,cb){
//    this.model('User').findOne({email:email},function(err,temp){
//         if(err) return cb(err);
//         if(temp) return cb(null,true);
//         cb(null,false);
//      });
// };

module.exports = mongoose.model('Url', UrlSchema);
