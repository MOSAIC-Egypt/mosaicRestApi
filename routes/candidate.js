const express = require('express');
const router = express.Router();
const path = require('path');
var multer = require('multer');
import candidate from '../model/candidate'
import jobPosition from '../model/jobposition'
import appliedJob from '../model/appliedjob'


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null,Date.now()+'-'+file.originalname)
  }
})

var upload = multer({ storage: storage }).single('cvfile');

router.get('/test',(req,res)=>{
    res.send('hello candiate ');
  })


//register a new candidate
router.post('/register',upload,function(req,res,next){
  const fields = req.body;
  const newFileName = req.file.filename;
  const insertedValues = {
    name: fields['name'],
    mail: fields['mail'],
    password: fields['password'],
    phone_number: fields['mail'],
    cv_file_name: newFileName,
  }
  let c = new candidate;
  c.add(insertedValues); //add new candidate to db 
  res.send('done');
})  

//get all positions 
router.post('/getallPositions',function(req,res,next){
    let jp = new jobPosition;
    jp.getAll((allPositions)=>res.send(allPositions));
})


//apply job 
router.post('/applyjobposition',function(req,res,next){
  let appliedjob = new appliedJob;
  let data = req.body;
 appliedjob.add(data); 
})


//apply job 
router.post('/login',function(req,res,next){
  let c = new candidate;
  let data = req.body; //data = {mail:'amrnabil5700@gmail',password:'123'}
  
  c.get(['candidate_id'],data,(result)=>{
    res.send(result);
  });
})














module.exports = router;