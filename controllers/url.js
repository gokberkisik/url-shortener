// Load required packages
var Url = require('../models/url');

exports.Main = function (req,res) {
  res.status(200);
  res.render('pages/index',{title:'Welcome',
                            description:'Url shortener',
                            keywords:'Faik Gökberk Işık, Url shortener'
  });
};

// exports.getFullUrl = function(req, res) {
//   Url.findById(req.user._id,'-password -__v',function(err,user){
//     if(err) return res.json({message:'Error'});
//     res.json(user);
//   });
// };
