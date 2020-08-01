/** 
*@param con is db connection  
*@param tableName is the table name in sql db 
*@param info is object with keys of the column name and values you want to insert >> {mail:"amrnabil5700@gmail.com"}
*/
//!cols name is important to be like db 

export const insert = (con,tableName,info)=>{
    const colNames = Object.keys(info);
    const colNamesStr = colNames.join(',');
    const colValues = Object.values(info);
    const colValuesStr = "'"+colValues.join('\',\'')+"'";
    
     con.query(`INSERT INTO ${tableName} (${colNamesStr}) VALUES(${colValuesStr})`, function (err, result, fields) {
     if (err) throw err;
     console.log("1 record inserted");
    })
}


/** 
*@param con is db connection  
*@param tableName is the table name in sql db 
*@param newvalue is the obj of one key(the column name) and one value(new value)
*@param condition is object with keys of the column name and values you want to be equal >> {name:"amr nabil ali"}
*/
//!cols name is important to be like db 

export const update = (con,tableName,newvalue,condition)=>{
    const valueColName = Object.keys(newvalue)[0];
    const valueColValue = Object.values(newvalue)[0];
    const conditionArr = Object.keys(condition).map(key=>`${key} = '${condition[key]}'`) ;
    const conditionStr = conditionArr.join(' and ') ;
    
    var sql = `UPDATE ${tableName} SET ${valueColName} = '${valueColValue}' 
    WHERE ${conditionStr}`;


    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
}

//!cols name is important to be like db 

export const updateInsert = (con,tableName,info,newvalue)=>{
  const valueColName = Object.keys(newvalue)[0];
  const valueColValue = Object.values(newvalue)[0];



  const colNames = Object.keys(info);
  const colNamesStr = colNames.join(',');
  const colValues = Object.values(info);
  const colValuesStr = "'"+colValues.join('\',\'')+"'";


  var sql = `INSERT INTO ${tableName} (${colNamesStr}) 
  VALUES (${colValuesStr})
  ON DUPLICATE KEY UPDATE
  ${valueColName} = '${valueColValue}'`;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}



/** 
*@param con is db connection  
*@param tableName is the table name in sql db 
*/

export const getAll = (con,tableName,callback)=>{
    con.query(`SELECT * FROM ${tableName}`, function (err, result, fields) {
     if (err) throw err;
     callback(result);
   })
  }

  

/** 
*@param con is db connection  
*@param tableName is the table name in sql db 
*@param cols is array of selected cols could be like ['mail','name'] or ['*'] for all 
*@param condition is object with keys of the column name and values you want to be equal >> {name:"amr nabil ali"}
//!condition is just (and only)
*/
//!cols name is important to be like db 

export const get = (con,tableName,cols,condition,callback)=>{
        const colsString = cols.join(',');
        const conditionArr = Object.keys(condition).map(key=>`${key} = '${condition[key]}'`) ;
        const conditionStr = conditionArr.join(' and ') ;

        con.query(`SELECT ${colsString} FROM ${tableName} where ${conditionStr}`, function (err, result, fields) {
         if (err) throw err;
         callback(result);
       })
  }


/** 
*@param con is db connection  
*@param tableName is the table name in sql db 
*@param condition is object with keys of the column name and values you want to be equal >> {name:"amr nabil ali"}
//!condition is just (and only)
*/
//!cols name is important to be like db 

export const remove = (con,tableName,condition)=>{
  const conditionArr = Object.keys(condition).map(key=>`${key} = '${condition[key]}'`) ;
  const conditionStr = conditionArr.join(' and ') ;

  var sql = `DELETE FROM ${tableName} WHERE ${conditionStr}`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}  

export const excecuteQuery = (con,sql,callback)=>{
     con.query(sql, function (err, result) {
    if (err) throw err;
    callback(result);
  });
}



