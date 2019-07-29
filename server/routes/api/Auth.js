const authController = require('../../controllers/AuthController');
const validateRegisterInput = require('../../validation/Register');
const validateLoginInput = require('../../validation/Login');

module.exports = (app) => {
  app.post('/register', function(req, res){
    authController.register(req.body.username, req.body.password, function(err, result){
      if(err){
        res.status(500).json('Username already exist');
        return;
      }
      if(result){
        res.status(200).json({tokenId: result, username: req.body.username});
      }else{
        res.status(401).json(result);
      }
    });
  });

  app.post('/login', function(req, res, next){
    authController.login(req.body.username, req.body.password, function(err, result){
      if(!result){
        res.status(err.statusCode).json(err.message);
        return;
      }
      res.status(200).json({tokenId: result, username: req.body.username});
    })
  });
};
