var fs=require('fs');

fs.unlink('dummy.txt',function(err){

if(err)
throw err;
else
console.log('Delete Success');


});
