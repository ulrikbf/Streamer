
var fs = require('fs');
var url = require('url');
var path = require('path');
var exec = require('child_process').exec;

var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;

function getPublic(res,fullPath){
    // Reades the fullPath piped in from router and opens/returns the file.
    var file =  fs.createReadStream(fullPath);
    res.writeHead(200,{'Content-type' : 'text/html'});
    file.pipe(res);
}

function getIndex(res){ 
    
    var options = {
        pretty : true,
        cache : true
    };
    
    var path = "./view/index.html";
    var file = fs.createReadStream(path) 
    file.pipe(res);
         
}

function getResource(res, req, parts){
    var path = './public/resources/' + parts.link;

    res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
    });

var url = 'mongodb://192.168.1.215:27017/resources';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");

    var col = db.collection(parts.link);
     col.find({},{title:1,_id:0}).toArray(function(err,docs){

         db.close();
         console.log(docs);
         var results = JSON.stringify(docs);
            console.log(results);
         res.write(results);
         db.close();
         res.end();
        });
    });
}

function getAjax(res, req, parts){
    
        res.writeHead(200, {
         'Content-Type': 'text/html',
         'Access-Control-Allow-Origin' : '*'
        });

        
        if(parts != undefined){
            res.write("this is intext, baby!" + parts.link);
            var parser = new urlParser(parts.link);

            parser.on('parsed', function(data){

                var stuff = exec(data.exec + data.url);
                console.log("Complete: " + data.exec + data.url);

                stuff.stderr.on('data',function(error){
                console.log(error);
                });

                stuff.on('close',function(code){
                    console.log("This is the closing code! " + code);
                });
            });
        }
    res.end("Hello WORLD!");
}

function getEntries(res, req, parts){
    var path = './public/resources/' + parts.collection;
    
    res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
    });

    var url = 'mongodb://192.168.1.215:27017/resources';
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server.");

        var col = db.collection(parts.collection);
        col.find({ title: parts.title }).toArray(function(err,docs){

            db.close();
            console.log(docs);
            var results = JSON.stringify(docs);
            console.log(results);
            res.write(results);
            db.close();
            res.end();
        });
    });
}

exports.index = getIndex;
exports.ajax = getAjax;
exports.public = getPublic;
exports.getResource = getResource;
exports.getEntries = getEntries;
