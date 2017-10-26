var fs=require('fs');
//var data='';
var readerStream=fs.createReadStream('newSample.txt');

/*
readerStream.setEncoding('UTF-8');

readerStream.on('data',function(chunk){

data+=chunk;
});


readerStream.on('end',function(chunk){

console.log(data);
});


readerStream.on('err',function(chunk){

throw err;
});
*/


//var data='#######OUTPUT#######'
var writerStream=fs.createWriteStream('newSampleClone.txt');
/*writerStream.write(data,'UTF-8');
writerStream.end();
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});*/


readerStream.pipe(writerStream);
console.log("Program Ended");

//console.log('\nEnd!');
