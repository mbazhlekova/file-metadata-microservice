import express from 'express';
import multer from 'multer';
import path from 'path';
//  import bodyParser from 'body-parser';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', multer({
  dest: path.join(__dirname, '/uploads/')
}).single('upl'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
});

export default router;
