var mysql = require('mysql');

var connector = function(obj){

  var con = mysql.createConnection({
    host     : obj.host,
    user     : obj.user,
    password : obj.password,
    database : obj.database
  });

  con.connect( err => if(err) console.error(err));
  return con;

}

module.exports = connector;
