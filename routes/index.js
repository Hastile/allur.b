var express = require('express');
var router = express.Router();

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
 
nightmare
  .goto('https://google.com')
  .wait('.RNmpXc')
  .evaluate(() => document.querySelector('.RNmpXc').value)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('index.html');
});

module.exports = router;
