const { Router } = require("express");
const express = require("express")
const router = express.Router()
const Model = require("../models/userModel")

router.post("/add", (req, res) => {
  console.log(req.body)
  // storing data in database
  new Model(req.body)
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err); 
    })
});

router.get('/getall', (req, res) => {
  
  Model.find({})
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

// ':' denotes a parameter
router.get('/getbyusername/:username', (req, res) => {
  Model.find({ username : req.params.username })
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

router.get('/getbyid/:userid', (req, res) => {
  Model.findById(req.params.userid)
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.delete('/delete/:userid', (req, res) => {
  Model.findByIdAndDelete(req.params.userid)
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put("/update/:userid", (req, res) => {
  
  Model.findByIdAndUpdate(req.params.userid, req.body)
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    res.status(500).json(err);
  });
})

router.post('/authenticate',(req, res)=>{
  const formData = req.body;
  Model.findOne({username : formData.username, password : formData.password})
  .then((result) => {
    if(result){
      res.status(201).json(result)
    }
    else{
      res.status(401).json(result);
    }
  }).catch((err) => {
    res.status(500).json(err);
  });
})

module.exports = router;