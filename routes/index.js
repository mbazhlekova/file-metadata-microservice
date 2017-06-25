import express from 'express';
import multer from 'multer';
const upload = multer({ dest: '/uploads'});

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

export default router;
