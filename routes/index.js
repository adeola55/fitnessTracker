var app = require("express").Router()
var path = require("path")
var db = require("../models/table.js")

app.get("/exercise", function(req,res){
  res.sendFile(path.join(__dirname,"../public/exercise.html"))
})
app.get("/stats", function(req,res){
  res.sendFile(path.join(__dirname,"../public/stats.html"))
})
app.get("/api/workout",function(req,res){
  db.find().then(records => {
    console.log("getrecords", records)
    res.json(records)
  })
})
app.post("/api/workout",function(req,res){
  db.create(req.body).then(records => {
    console.log("postrecords", records)
    res.json(records)
  })
})
app.put("/api/workout/:id",function(req,res){
  db.findByIdandupdate(req.params.id,{
    $push:{routine:req.body}},
    {new:true}
  ).then(records => {
    console.log("getrecords", records)
    res.json(records)
  })
})
module.exports = app