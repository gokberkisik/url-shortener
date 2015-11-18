var mongoose = require('mongoose'),
 Schema = mongoose.Schema,
 validator = require('validator'),
 autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose);

var UrlSchema = new Schema({
    link: { type: String, required: true,lowercase: true, validate:validateUrl},
    shortenedLink: { type: String, required:true},
    createdOn: {type:Date, default:Date.now}
});

UrlSchema.plugin(autoIncrement.plugin,'Url');

 function validateUrl(str){
  return validator.isURL(str);
 }

module.exports = mongoose.model('Url', UrlSchema);
