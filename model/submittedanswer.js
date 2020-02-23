import con from '../config/connection'
import {insert,update,getAll} from './utility'
import Model from './model'


class SubmittedAnswer extends Model{
    constructor(){
        super('submitted_answers');
      }
}

export default SubmittedAnswer;