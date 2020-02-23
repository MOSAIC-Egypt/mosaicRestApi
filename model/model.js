import con from '../config/connection'
import {insert,update,getAll,remove,get,updateInsert,excecuteQuery} from './utility'

class Model{
    constructor(table){
        this.tableName = table;
      }
    //admin add test for candidate
    add(info){
        insert(con,this.tableName,info);
      }

    update(newvalue,condition){
        update(con,this.tableName,newvalue,condition);
    } 
     getAll(callback){
         getAll(con,this.tableName,callback);
      }
    remove(condition){
        remove(con,this.tableName,condition);
    }  
    get(cols,condition,callback){
        get(con,this.tableName,cols,condition,callback);
    }
    updateInsert(info,newvalue){
        updateInsert(con,this.tableName,info,newvalue);
    }
    excecuteQuery(query,callback){
        excecuteQuery(con,query,callback);
    }

}

export default Model;