const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT;
const authCheckMiddleware = require('./middleware/AuthCheck');
const staticFiles = express.static(path.join(__dirname, '../../frontend/build'));
require('dotenv').config();
let app = express();

console.log(staticFiles);
console.log(__dirname);

mongoose.connect('mongodb+srv://admin-leqi:demo@cluster0-ciz30.mongodb.net/overwatchFantasyLeagueDB', {useNewUrlParser: true}, function(err){
  if(err){
    console.log('Error connecting to: mongodb+srv://admin-leqi:demo@cluster0-ciz30.mongodb.net/overwatchFantasyLeagueDB')
  }
  else{
    console.log('Connected to: mongodb+srv://admin-leqi:demo@cluster0-ciz30.mongodb.net/overwatchFantasyLeagueDB')
  }
})

mongoose.set('useFindAndModify', false);

app.use(staticFiles);
app.use(cors());
app.options('*', cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);
app.use('/predictions', authCheckMiddleware);
app.use('/predictions/:id', authCheckMiddleware);
app.use('/*', staticFiles);

app.listen(PORT, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port' + PORT);
});
