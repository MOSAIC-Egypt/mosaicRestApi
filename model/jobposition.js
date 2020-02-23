import con from '../config/connection'
import {insert,update,getAll} from './utility'
import Model from './model'

class JobPosition extends Model{
    constructor(){
      super('job_positions');
      }

}

export default JobPosition;