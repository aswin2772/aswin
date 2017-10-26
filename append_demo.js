var fs=require('fs');

fs.appendFile('sample.txt','New Text Added',function(err){

if(err)
throw err;

else
console.log('Succesfully appended');
});
