// This is where my create queries would go
var mysql = require('mysql');

var table = (con,obj)=>{
  try {
    if(!obj.hasOwnProperty('tablename')) throw "tablename";
    if(!obj.hasOwnProperty('columns')) throw "columns";
    if(!obj.hasOwnProperty('key')) throw "key";
  }catch(e){
    console.error(`${e} not defined`);
    return
  }
  // generating my query string
  var cols = new String();
  obj.key == true ? cols+="_index INT AUTOINCREMENT,": "";
  obj.columns.forEach((name)=>{ cols+= name+" VARCHAR," });
  var query = `CREATE TABLE [IF NOT EXISTS] ${obj.tablename} (${cols})`;

  //executing the query
  con.query(query,(err,res)=>{
    if(err)throw err;
    return res; // database has been created
  });
}
