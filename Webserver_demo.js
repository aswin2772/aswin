var http=require('http');
var url=require('url');
var fs=require('fs');

var server=http.createServer(function(req,res){
var pathname=url.parse(req.url).pathname;

console.log('Request for '+pathname+' recieved');

fs.readFile(pathname.substring(1),function(err,data){

if(err)
throw err;

else
{
res.writeHead(200,{'ContentType':'text/html'});
res.write(data);
console.log(data.toString());
res.end();
}

});


});

server.listen(8080);
