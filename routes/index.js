var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('index.html');
});
const Nightmare = require('nightmare')
router.get('/nightmare', async function (req, res, next) {
  const nightmare = Nightmare({ show: false })
   
  nightmare
    .goto('https://google.com')
    .wait('.RNmpXc')
    .evaluate(() => document.querySelector('.RNmpXc').value) // I'm feeling lucky
    .end()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(error => {
      console.error('Search failed:', error)
    })
});

module.exports = router;
