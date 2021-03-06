const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use(routes);


mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/fitnessTracker', {  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false  });

app.listen(PORT,function(){
  console.log("App running on port:",PORT)
});