import con from '../config/connection'
import {insert,update,getAll,remove,get} from './utility'
import Model from './model'


class Question extends Model{
    constructor(){
        super('questions');
      }
}

export default Question;