var route = require('./router.js');
var fs = require('fs');

require('http').createServer(function(req, res) {

    route.router(res,req, function(err,res){
    
        res.end();
    });   
    

/*var dataLength = 0;

  res.writeHead(200, {'Content-Type': 'video/mp4'});
  var rs = fs.createReadStream('test.mp4');
  rs.pipe(res);

  rs.on('data',function(chunk){
    dataLength += chunk.length;  
  });
  
  rs.on('end',function(){
  console.log("The length 3was: " + dataLength);
  res.end()
  console.log("Quiting");
  });
*/
}).listen(4000);
