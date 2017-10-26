var mysql=require('mysql');


var con=mysql.createConnection({

host:'localhost',
user:'root',
password:'password',
database:'gtdb'
});


con.connect(function(err)
{
if(err)
throw err;
console.log('Connection established');

 con.query("SELECT * FROM customers2 ORDER BY name DESC", function (err, result, fields)
{
if(err)
throw err;
console.log(result);

});



});
