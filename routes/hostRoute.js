const express = require('express');
const path = require('path');
  const hostRouter = express.Router();

hostRouter.get("/add-home",(req,res,next)=>{
  console.log("Register Your Home Here")
  res.sendFile(path.join(__dirname,'../','views','add-home.html'))
})


hostRouter.post("/add-home", (req, res, next) => {
  console.log("registered Successfully");
  console.log(req.body);
  res.sendFile(path.join(__dirname,'../','views','home-added.html'))
});

  module.exports = hostRouter;
