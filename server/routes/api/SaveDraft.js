const draftController = require('../../controllers/DraftController');
const authCheckMiddleware = require('../../middleware/AuthCheck');

module.exports = (app) => {
  app.put('/draft', authCheckMiddleware, (req, res) => {
    draftController.save(req.userData.username, req.body, function(err, result){
      if(err){
        res.json({
          error: err
        })
        return;
      }
      console.log(result);
      res.send(result);
    });
  });
};