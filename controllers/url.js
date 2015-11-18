// Load required packages
var Url = require('../models/url'),
    baseConventer = require('base-converter');

var ALPHABET = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789';

exports.Main = function (req,res) {
  renderPage(res,false,'');
};

exports.AddUrl = function (req,res) {
  if(typeof req.query.url === 'undefined'){
      renderPage(res,true,'Hey there, something missing.');
  } else if(req.query.url.length > 0){
      Url.nextCount(function(error,count){
          if(error){
            renderPage(res,true,'Something bad happend.');
          }
          var url = new Url({
            link:req.query.url,
            shortenedLink:baseConventer.decToGeneric(count + 1, ALPHABET)
          });
          url.save(function(error){
            if(error){
              renderPage(res,true,'Something bad happend.');
            }else{
              var link = 'flume.herokuapp.com/r/' + url.shortenedLink;
              renderPage(res,true,link);
            }
          });
      });
    } else {
      renderPage(res,true,'Hey there, we cannot shorten the empty link.');
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

exports.Redirect = function (req,res) {
    var path = req.params.path;

    Url.findOne({shortenedLink:path},function(error,url){
      if(error){
        renderPage(res,true,'Something bad happend.');
      }

      if(!url){
          res.render('pages/index',{title:'Welcome',
                                    description:'Url shortener',
                                    keywords:'Faik Gökberk Işık, Url shortener',
                                    url:'Cant find this soz!',
                                    showLink:true
          });
      }else{
        res.redirect('//' + url.link);
      }


    });

};

function renderPage(res,showLink,url) {
  res.render('pages/index',{title:'Welcome',
                            description:'Url shortener',
                            keywords:'Faik Gökberk Işık, Url shortener',
                            url:url,
                            showLink:showLink
  });
}
