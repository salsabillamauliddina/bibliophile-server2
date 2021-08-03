const express = require('express')
const router = express.Router()
const ApiController = require('../controllers/ApiController')

router.get('/popular-book', ApiController.getBookTop)
router.get('/article-books', ApiController.getArticleBooks)
// router.get('/quote', ApiController.randomQuote )

module.exports = router;