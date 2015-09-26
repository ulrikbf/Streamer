var urlParser = require('./url_parser.js');

var url = "magnet:?aksdsad";
var urlPirser = new urlParser(url);

urlPirser.on('parsed',function(info){
    console.log(info);
});
