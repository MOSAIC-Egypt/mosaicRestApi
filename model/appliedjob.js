import con from '../config/connection'
import {insert,update,getAll} from './utility'
import Model from './model'

 

class AppliedJob extends Model{
    constructor(){
      super('applied_jobs');
      }
}

export default AppliedJob; 