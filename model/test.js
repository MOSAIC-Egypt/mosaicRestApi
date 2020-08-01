import con from '../config/connection'
import {insert,update,getAll,remove,get} from './utility'
import Model from './model'


class Test extends Model{
    constructor(){
        super('tests');
      }
}

export default Test;