const predictionsController = require('../../controllers/PredictionsController');
const authCheckMiddleware = require('../../middleware/AuthCheck');
module.exports = (app) => {
  app.get('/predictions', authCheckMiddleware, (req, res) => {
    const filter = {'username': req.userData.username}
    predictionsController.find(filter, function(err, results){
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
