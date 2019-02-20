var create_func = require('./queries/create.js');
var select_func = require('./queries/select.js');
/*
* @param {Object} obj - The object containing the connection details
* @param {String} obj.host
* @param {String} obj.user
* @param {String} obj.password
* @param {String} obj.database
*/
var connect = (obj)=>{
  try{
    if(!obj.hasOwnProperty('host')) throw "host";
    if(!obj.hasOwnProperty('user')) throw "user";
    if(!obj.hasOwnProperty('password')) throw "password";
    if(!obj.hasOwnProperty('database')) throw "database";
  }catch(e){
    console.error(`${e} has not been defined`);
    return
  }
  return require('./connect.js')(obj);
}

// my queries would be a function taking the connection as a param and the json too :)

/*
* @param {Function} con - The connection response returned by the connect function
* @param {Object} obj - The Object contining the table info
* @param {String} obj.columns
* @param {Boolean} obj.key
*/
var createTable = create_func.table;
/*
* @param {Function} con - The connection response returned by the connect function
* @param {Object} obj - The Object contining the table info
* @param {String} obj.columns
* @param {Boolean} obj.key
*/
var select = select_func.getData;


module.exports = {
  connect, // The info for connecting should be passed here as param
  createTable,
  select,
}
