import con from '../config/connection'
import {insert,update,getAll} from './utility'
import Model from './model'


class TestForCandidate extends Model{
    constructor(){
        super('tests_for_candidate');
      }
}

export default TestForCandidate;