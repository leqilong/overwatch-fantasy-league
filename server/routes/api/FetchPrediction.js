const predictionsController = require('../../controllers/PredictionsController');
const authCheckMiddleware = require('../../middleware/AuthCheck');
module.exports = (app) => {
  app.get('/predictions/:id', authCheckMiddleware, (req, res) => {
    const filter = {"matchId": req.params.id, "username": req.userData.username};
    predictionsController.findByMatchId(filter, function(err, results){
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
