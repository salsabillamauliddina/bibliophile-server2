const express = require('express')
const router = express.Router()
const {authenticate} = require('../middlewares/auth')

const UserRoute = require('./user')
const BookRoute = require('./book')
const ApiRoute = require('./api')

router.use('/', ApiRoute)
router.use('/', UserRoute)
router.use(authenticate)
router.use('/books',BookRoute)

module.exports = router;