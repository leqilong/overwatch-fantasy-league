const draftController = require('../../controllers/DraftController');
const authCheckMiddleware = require('../../middleware/AuthCheck');


module.exports = (app) => {
  app.get('/draft', authCheckMiddleware, (req, res) => {
    const filter = {'username': req.userData.username}
    draftController.find(filter, function(err, result){
      if (err){
        res.json({
          error: err
        })
        return;
      }
      res.send(result)
    });
  });
};