var mysql = require('mysql');

var getData = (con,obj)=>{
  try{
    if(!obj.hasOwnProperty('tablename')) throw "tablename";
    if(!obj.hasOwnProperty('columns')) throw "columns";
    if(!obj.hasOwnProperty('delimiters')) throw "delimiters";
  }catch(e){
    console.error(`${e} something here`);
  }
}
