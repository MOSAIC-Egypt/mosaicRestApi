const express = require('express');
const router = express.Router();

import answer from '../model/answer'
import question from '../model/question'
import test from '../model/test'
import appliedjob from '../model/appliedjob'
import model from '../model/model'




router.get('/test',(req,res)=>{
    res.send('hello admin ');
  })


  
//get answers 
router.post('/getanswers',function(req,res,next){
  let a = new answer;
  let data = req.body; //data = {mail:'amrnabil5700@gmail',password:'123'}
  
  a.get(['*'],data,(result)=>{
    res.send(result);
  });
})


//get questions
router.post('/getquestions',function(req,res,next){
  let q = new question;
  let data = req.body; //data = {mail:'amrnabil5700@gmail',password:'123'}
  
  q.get(['*'],data,(result)=>{
    res.send(result);
  });
})

//get tests 
router.post('/gettests',function(req,res,next){
  let t = new test;
  let data = req.body; //data = {mail:'amrnabil5700@gmail',password:'123'}
  
  t.get(['*'],data,(result)=>{
    res.send(result);
  });
})

//get applied jobs 
router.post('/getappliedjob',function(req,res,next){
  let m = new model;
  let data = req.body; //data = {mail:'amrnabil5700@gmail',password:'123'}
  const query = 'select * from applied_jobs as aj,candidates as c where aj.candidate_id = c.candidate_id';

  m.excecuteQuery(query,(result)=>{
    res.send(result);
  });
})


//get all answers 
router.post('/getallanswers',function(req,res,next){
  let a = new answer;
  a.getAll((result)=>{
    res.send(result);
  });
})


//get all questions
router.post('/getallquestions',function(req,res,next){
  let q = new question;
  q.getAll((result)=>{
    res.send(result);
  });
})

//get all tests 
router.post('/getalltests',function(req,res,next){
  let t = new test;
  t.getAll((result)=>{
    res.send(result);
  });
})


//updates
//update answers 
router.post('/updateanswers',function(req,res,next){
  let a = new answer;
  let data = req.body; //data = {mail:'amrnabil5700@gmail',password:'123'}
  
  a.updateInsert(data['info'],data['newValue'],(result)=>{
    res.send(result);
  });
})


//update questions
router.post('/updatequestions',function(req,res,next){
  let q = new question;
  let data = req.body; //data = {mail:'amrnabil5700@gmail',password:'123'}
  console.log(data);
  
  q.updateInsert(data['info'],data['newValue'],(result)=>{
    res.send(result);
  });
}) 

//update tests 
router.post('/updatetests',function(req,res,next){
  let t = new test;
  let data = req.body; //data = {mail:'amrnabil5700@gmail',password:'123'}
  console.log(data);
  t.updateInsert(data['info'],data['newValue'],(result)=>{
    res.send(result);
  });
})




module.exports = router;