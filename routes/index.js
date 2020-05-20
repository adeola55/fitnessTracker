var app = require("express").Router()
var path = require("path")
var db = require("../models/table.js")

app.get("/exercise", function(req,res){
  res.sendFile(path.join(__dirname,"../public/exercise.html"))
})
app.get("/stats", function(req,res){
  res.sendFile(path.join(__dirname,"../public/stats.html"))
})
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname,"../public/index.html"))
})
app.get("/api/workouts",function(req,res){
  db.find().then(records => {
    console.log("getrecords", records)
    res.json(records)
  })
})
app.post("/api/workouts",function(req,res){
  db.create(req.body).then(records => {
    console.log("postrecords", records)
    res.json(records)
  })
})
app.put("/api/workouts/:id",function(req,res){
  db.findByIdAndUpdate(req.params.id,{
    $push:{routine:req.body}},
    {new:true}
  ).then(records => {
    console.log("getrecords", records)
    res.json(records)
  })
})

app.get("/api/workouts/range", function(req,res){
  db.find().limit(7).then(records => {
    console.log("getrecords", records)
    res.json(records)
  })
})
module.exports = app