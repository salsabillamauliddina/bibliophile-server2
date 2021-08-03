const express = require('express')
const router = express.Router()
const { authenticate,authorize } = require('../middlewares/auth');

const BookController = require('../controllers/BookController');
router.use(authenticate)
router.post('/', BookController.postBook)
router.get('/', BookController.getBook)
router.get('/:id', BookController.findOne)
router.put('/:id', BookController.putBook)
router.patch('/:id', BookController.patchBook)
router.delete('/:id',authorize, BookController.destroy)

module.exports = router;