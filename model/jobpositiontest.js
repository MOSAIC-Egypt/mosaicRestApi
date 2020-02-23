import con from '../config/connection'
import {insert,update,getAll,remove,get} from './utility'
import Model from './model'

class JobPositionTest extends Model{
    constructor(){
        super('job_positions_tests');
      }
}

export default JobPositionTest;