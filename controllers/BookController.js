const {User,Book} = require('../models')

class BookController {
  static postBook (req,res,next) {
    const {title,author,total_pages,rating,start_read,end_read,genre,review} = req.body

    Book.create({
      title,
      author,
      total_pages,
      rating,
      start_read,
      end_read,
      genre,
      review,
      UserId : req.user.id
    })

    .then((book) => {
      res.status(201).json({msg: `Success created booklist!`,book})
    })

    .catch((err) => {
      console.log(err);
    })
  }

  // ! still got a prob too
  static getBook (req,res,next) {
    Book.findAll({
      order: [['id','ASC']]
    })

    .then((books) => {
      res.status(200).json(books)
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err)
    })
  }

  static findOne (req,res,next) {
    const id = req.params.id
    Book.findByPk(id)
    .then((product) => {
      res.status(200).json(product)
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err)
    })
  }

  static putBook (req,res,next) {
    const id = req.params.id
    const { title, author,total_pages,rating,start_read,end_read,genre,review } = req.body

    Book.update({
      title,
      author,
      total_pages,
      rating,
      start_read,
      end_read,
      genre,
      review
    },
      {where : {id},
      returning: true
    })

    .then((product) => {
      console.log(product, `<<< ini data`);
      if (product[0] === 0) {
        res.status(500).json({msg : `Invalid data`})
      } else {
        res.status(200).json(product[1])
      }
    })

    .catch((err) => {
      console.log(err,`<< masuk error`);
      res.status(500).json(err)
    })
  }

  // ! still return the error 
  static patchBook(req,res,next) {
    const id = +req.params.id
    const { start_read, end_read } = req.body

    Book.update(
      { start_read, end_read },
      {
        where : {id},
        returning : true
      })

    .then((product) => {
      console.log(product,`<<< ini data`);
      if (product[0] === 0) {
        res.status(500).json({msg : `Invalid data`})
      } else {
        res.status(200).json(product[1])
      }
    })

    .catch((err) => {
      console.log(err, `<< masuk error`);
      res.status(500).json(err)
    })
  } 

  static destroy (req,res,next) {
    const id = +req.params.id
    Book.destroy({
      where: {id}
    })

    .then((product) => {
      if (product) {
        res.status(200).json({
          msg: `Deleted booklist success!`
        })
      } else {
        res.status(500).json({
          msg: `Booklist isnt found!`
        })
      }
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err)
    })
  }
}

module.exports = BookController;