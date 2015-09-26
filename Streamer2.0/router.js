
var fs = require('fs');
var requestHandlers = require('./streamer.js');
var path = require('path');
var url = require('url');

var handle = {};
handle['/'] = requestHandlers.index;
handle['/streaming'] = requestHandlers.video;
handle['/ajax'] = requestHandlers.ajax;
handle['/getResource'] = requestHandlers.getResource;
handle['/listEntry'] = requestHandlers.getEntries;
/*<================****===============> */
handle['public'] = requestHandlers.public;

var router = function(res, req){

// url_parts will contain the different sections of the requested URL. like the protocol, the href, slashes, etc.
// parts will contain the "data", like the &=?. All the "name" variables in HTML will be found in parts, e.o from Forms, etc.
var url_parts = url.parse(req.url,true);
var parts = url_parts.query;

console.log("requestin: " + url_parts.pathname);
console.log("Data: " + parts.intext);
    try {
       
        // if the url PATH is the same name as a function, we will execute that function with the URL parts.
        if (typeof handle[url_parts.pathname] === 'function') {
            handle[url_parts.pathname](res,req,parts);

         }else{
            var dirname = path.dirname(decodeURI(req.url));
            var basename = path.basename(decodeURI(req.url));
            var fullPath = path.resolve(dirname,basename);
            fullPath = "." + fullPath; 
            console.log(fullPath);
            
            handle['public'](res, fullPath);
         }           
    }
        catch(err) {
            
            console.log(err);
        }

}

//Exports the "router" as a module for Server.js
exports.router = router

console.log("heeeyyyyyJA.OHOH!");

console.log("I am running inside a source block, bebbeh!");

console.log("heeeyyyyyJA.OHOH!");

console.log("I am running inside a source block, bebbeh!");

console.log("heeeyyyyyJA.OHOH!");
var k = 0;
for(var i = 0; i < 10; i++) {
    k+=i; 
}
console.log(k);
console.log("I am running inside a source block, bebbeh!");
