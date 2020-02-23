const express = require('express');
const router = express.Router();


router.get('/test',(req,res)=>{
    res.send('hello amr ');
  })

 

  
module.exports = router;