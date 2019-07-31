const predictionsController = require('../../controllers/PredictionsController');

module.exports = (app) => {
  app.get('/leaders', (req, res) => {
    predictionsController.updateScores(function(err, results){
        if(err){
          res.json({
            error: err
          });
          return;
        }
       res.send(results);
    });
  });
};
