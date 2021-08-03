const { User } = require('../models')
const { comparePwd } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static postRegister (req,res,next) {
    const { username, email, password } = req.body

    User.create({
      username,
      email,
      password
    }, {returning:true})

    .then ((data) => {
      let user = {
        id: data.id,
        email: data.email,
        username: data.username
      }
      res.status(201).json({msg: `Success Created!`, user})
    })

    .catch ((err) => {
      console.log(err);
    })
  }

  static postLogin (req,res,next) {
    const { username, email, password } = req.body

    User.findOne({
      where: {
        username,
        email
      }
    })

    .then ((data) => {
      if (data) {
        let checkPwd = comparePwd(password,data.password)

        if (checkPwd) {
          let payload = {
            id: data.id,
            username: data.username,
            email: data.email
          }

          const access_token = generateToken(payload)
          res.status(200).json({access_token})

        } else {
          res.status(401).json({msg: `Invalid email/pass`})
        }

      } else {
        res.status(401).json({msg: `Invallid email/pass`})
      }
    })

    .catch ((err) => {
      console.log(err);
    })
  }
}

module.exports = UserController;