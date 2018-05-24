var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// How to add parmaeters to post routes
router.post('/input', function(req, res, next){
    var item = {
        type: req.body.type,
        content: req.body.content,
        script: false,
        script_pseudo: false,
        script_safe: false,
        html: false,
        href: false,
        css: false
    };
    if(item.type == "script") {
        item.script = true;
    } else if(item.type == "html") {
        item.html = true;
    } else if (item.type == "href") {
        item.href = true;
    } else if (item.type == "css") {
        item.css = true;
    } else if (item.type == "script_pseudo") {
        item.script_pseudo = true;
    } else if (item.type == "script_safe") {
        item.script_safe = true;
    }
    res.render('index', item);
});



// How to add parameters to get routes
router.get('/test/:id', function(req, res, next){
  res.render('test', {output: req.params.id});
});




module.exports = router;
