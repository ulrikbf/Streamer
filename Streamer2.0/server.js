
var route = require('./router.js');
var fs = require('fs');

require('http').createServer(function(req, res) {

    route.router(res,req, function(err,res){
    
        res.end();
    });   
    

}).listen(4000);
