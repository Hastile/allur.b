var express = require('express');
var router = express.Router();
const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com');
  const title = await page.title();
  await browser.close();
  console.log(`Google.com title: ${title}`)
})()
/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('index.html');
});

module.exports = router;
