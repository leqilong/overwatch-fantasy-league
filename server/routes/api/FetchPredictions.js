const fetch = require('node-fetch')
const predictionsController = require('../../controllers/PredictionsController');

module.exports = (app) => {
  app.get('/predictions', (req, res) => {
    predictionsController.find(req.query, function(err, results){
        if(err){
            console.log(err);
            res.json({
                success: 0,
                error: err
            });
            return;
        }
        res.json({
            success: 1,
            data: results
        });
    });
  });
};
