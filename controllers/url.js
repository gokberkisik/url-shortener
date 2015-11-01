// Load required packages
var Url = require('../models/url');


exports.Main = function (req,res) {
  res.render('pages/index',{title:'Welcome',
                            description:'Url shortener',
                            keywords:'Faik Gökberk Işık, Url shortener',
                            url:'Having fun',
                            showLink:false
  });
};

exports.AddUrl = function (req,res) {
    if(typeof req.query.url === 'undefined'){
      //TODO:Handle the route.
    } else if(req.query.url.length > 0){
      var url = new Url({
        link:req.query.url,
        shortenedLink:'Womaoh'
      });

      url.save(function(error){
        if(error){
          // TODO: Do something
        }else{
          res.render('pages/index',{title:'Welcome',
                                    description:'Url shortener',
                                    keywords:'Faik Gökberk Işık, Url shortener',
                                    url:req.query.url,
                                    showLink:true
          });
        }
      });


    } else if (req.query.url.length === 0){
      res.render('pages/index',{title:'Welcome',
                                description:'Url shortener',
                                keywords:'Faik Gökberk Işık, Url shortener',
                                url:'Hey there, we cannot shorten the empty link.',
                                showLink:true
      });
    }
};

exports.Error = function (req,res) {
  res.render('pages/error',{title:'Welcome',
                            description:'Url shortener',
                            keywords:'Faik Gökberk Işık, Url shortener',
                            url:'Having fun',
                            showLink:false
  });
};

// exports.getFullUrl = function(req, res) {
//   Url.findById(req.user._id,'-password -__v',function(err,user){
//     if(err) return res.json({message:'Error'});
//     res.json(user);
//   });
// };
