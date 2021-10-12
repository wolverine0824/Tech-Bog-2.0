const router = require('express').Router();
const { Comments } = require('../models');
const withAuth = require('../utils/auth');

router.post('/', async (req, res) => {
  try {
    const commentsData = await Comments.create({
     user_id: req.session.userId,
     post_id: req.body.postId,
     comment: req.body.comment,
    });

  res.redirect(req.get('referer'))
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
