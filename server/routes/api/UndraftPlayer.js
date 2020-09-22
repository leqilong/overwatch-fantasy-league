const draftController = require('../../controllers/DraftController');
const authCheckMiddleware = require('../../middleware/AuthCheck');

module.exports = (app) => {
  app.delete('/draft', authCheckMiddleware, (req, res) => {
    draftController.delete(req.userData.username, req.body, function(err, result){
      if (err){
        res.json({
          error: err
        })
        return;
      }
      res.send(result);
    })
  })
}