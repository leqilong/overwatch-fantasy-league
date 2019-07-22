const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const authCheckMiddleware = require('./middleware/AuthCheck');
require('dotenv').config();
let app = express();


mongoose.connect('mongodb://localhost:27017/overwatchFantasyLeagueDB', {useNewUrlParser: true}, function(err){
  if(err){
    console.log('Error connecting to: mongodb://localhost:27017/overwatchFantasyLeagueDB')
  }
  else{
    console.log('Connected to: mongodb://localhost:27017/overwatchFantasyLeagueDB')
  }
})

mongoose.set('useFindAndModify', false);

// const predictionSchema = new mongoose.Schema({
//   seriesWinner: String,
//   match_id: Number
// })
// //mongoose will be able to pluralize the model into a collection - Predictions
// const Prediction = mongoose.model("Prediction", predictionSchema);
//
// const prediction = new Prediction ({
//   seriesWinner: "Chengdu Hunters",
//   match_id: 12345
// });
// //.save causes prediction to be added to the Predictions collection
// prediction.save();

app.use(cors());
app.options('*', cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);
app.use('/predictions', authCheckMiddleware);
app.use('/predictions/:id', authCheckMiddleware);

app.listen(PORT, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port' + PORT);
});
