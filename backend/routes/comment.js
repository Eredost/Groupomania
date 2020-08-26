const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
const auth = require('../middlewares/auth');

router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;
