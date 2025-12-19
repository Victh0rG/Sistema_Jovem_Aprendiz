const express = require('express');
const app = express();
const router = express.Router();


app.use(express.json());
/* GET home page. */
router.get('/', (req, res, next) => {
  //res.render('index', { title: 'Express' });
  res.send('respond with a resource');

  res.json({ mesage: 'Json Funcionanndo'})
  next();
});

module.exports = router;