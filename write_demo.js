var fs=require('fs');

fs.writeFile('sample.txt','Newest Content Added',function(err){

if(err)
throw err;
else
console.log('Write Success');


});
