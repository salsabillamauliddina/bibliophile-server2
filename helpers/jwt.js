const jwt = require('jsonwebtoken')

function generateToken (payload) {
  const generate = jwt.sign(payload, process.env.SECRET)
  return generate
}

function verifyToken (token) {
  const verify = jwt.verify(token, process.env.SECRET)
  return verify
}

module.exports = {
  generateToken,
  verifyToken
}