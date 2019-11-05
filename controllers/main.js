var express = require('express');
var router = express.Router();
var auth = require('./security/auth');
var login = require('./security/login');

// ruta libre, login
router.post('/login', login);

// usar el middleware
router.use(auth);
  
// conseguir autorización 
router.get('/auth', (req, res) => {
    res.json(req.tokenInfo);
});

module.exports = router;
