require('dotenv').config()
const keys = require('../keys') 
var mysql = require('mysql');

var con = mysql.createConnection({
    host: keys.HOSTNAME_DB,
    port:keys.PORT_DB,
    user: keys.USER_DB,
    password: keys.PASSWORD_DB,
     database: keys.NAME_DB,
  //   debug:true
  });


  export default con;