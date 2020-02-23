import con from '../config/connection'
import {insert,update,getAll,get} from './utility'
import Model from './model'


class Candidate extends Model{
  constructor(){
    super('candidates');
  }
}

export default Candidate;