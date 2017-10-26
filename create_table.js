var mysql=require('mysql');

var con=mysql.createConnection({

host:'localhost',
user:'root',
password:'password',
database:'gtdb'
});

con.connect(function(err){

if(err)
throw err;
console.log('Connected');

var qry='CREATE TABLE customers2 (id INT AUTO_INCREMENT PRIMARY KEY,name varchar(25), address varchar(25))';
con.query(qry, function(err, result){
if(err)
throw err;
console.log('Table Created!');

});


});
