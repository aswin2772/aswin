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

 con.query("DELETE FROM customers2 where name='Gautam'", function (err, result, fields)
{
if(err)
throw err;
console.log(result);
});

con.query("SELECT * FROM customers2", function (err, result, fields)
{
if(err)
throw err;
console.log(result);

});

});
