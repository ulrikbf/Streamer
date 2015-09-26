var util = require('util');
var EventEmitter = require('events').EventEmitter;

// @station - an object with `freq` and `name` properties
var urlParser = function(url) {

    var self = this;
    self.URL = url;

    setTimeout(function(){
        var type = { type : "", link : ""};
        var subString = self.URL.substring(0,6);
        
        if(subString === "magnet"){
            type.type = "magnet";
            type.url = '"' + self.URL + '"';
            type.exec= "/Downloaded/diana/diana add ";
            
        } else {
        
            console.log("Im not a magnet!");
            type.type = "http";
            type.url = self.URL;
            type.exec ="wget -P /home/ulrikbf/Downloads/ ";
        }
        self.emit('parsed', type);
    
    
    }, 0);
    // emit 'open' event instantly
}
// extend the EventEmitter class using our urlParser class
util.inherits(urlParser, EventEmitter);

// we specify that this module is a refrence to the urlParser class
module.exports = urlParser;
