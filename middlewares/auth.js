const { User, Book } = require('../models') 
const { verifyToken } = require('../helpers/jwt')

function authenticate (req,res,next) {
  const { access_token } = req.headers;
  console.log(req.headers, `<<< ini headers`);

  if (access_token) {
    const decoded = verifyToken(access_token)
    User.findOne({
      where: {
        username: decoded.username,
        email: decoded.email
      }
    })

    .then((user) => {
      if (user) {
        req.user = {id: user.id}
        next()
      } else {
        res.status(401).json({msg: `Invalid access token!`})
      }
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({msg: `Internal server is an error!`})
    })

  } else {
    res.status(401).json({msg: `Please login first!`})
  }
}


function authorize (req,res,next) {
  const id = +req.params.id

  Book.findOne({where: {id}})
  .then((book) => {
    if (book) {
      const valid = req.user.id === book.UserId

      if (valid) {
        next()
      } else {
        res.status(401).json({msg: `Unauthorized`})
      }

    } else {
      res.status(401).json({msg: `Unauthorized`})
    }
  })

  .catch((err) => {
    console.log(err);
    res.status(500).json({msg: `Err`})
  })
}


module.exports = {
  authorize,
  authenticate
}