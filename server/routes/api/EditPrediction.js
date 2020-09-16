const predictionsController = require('../../controllers/PredictionsController');
const authCheckMiddleware = require('../../middleware/AuthCheck');
module.exports = (app) => {
  app.patch('/predictions/:id', authCheckMiddleware, (req, res) => {
    delete req.body._id;
    req.body.username=req.userData.username;
    predictionsController.update({"matchId": req.params.id}, req.body, function(err, results){
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
