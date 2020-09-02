const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');

const authCtrl = require('../controllers/auth');
const auth = require('../middlewares/auth');

// Limit number of requests per 1 hour
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 3,
    message: 'Trop de requêtes ont été effectuées, veuillez réessayer dans une heure'
});

router.post('/signup', limiter, authCtrl.signup);
router.post('/login', limiter, authCtrl.login);
router.get('/me', auth, authCtrl.getCurrentUser);

module.exports = router;
