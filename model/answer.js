import con from '../config/connection'
import {insert,update,getAll,remove,get} from './utility'
import Model from './model'


class Answer extends Model{
    constructor(){
        super('answers');
      }
}

export default Answer;