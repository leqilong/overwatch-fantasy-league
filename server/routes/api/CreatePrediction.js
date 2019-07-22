const predictionsController = require('../../controllers/PredictionsController');
const authCheckMiddleware = require('../../middleware/AuthCheck');

module.exports = (app) => {
  app.post('/predictions', authCheckMiddleware, (req, res) => {
    predictionsController.create(req.userData.username, req.body, function(err, result){
      if(err){
        console.log(err);
        res.json({
          error: err
        })
        return;
      }
      res.send(result);
    });
  });
};
