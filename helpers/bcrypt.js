const bcrypt = require('bcrypt')

function hashPwd (password) {
  const hash = bcrypt.hashSync(password,8)
  return hash
}

function comparePwd (password,hash) {
  const compare = bcrypt.compareSync(password,hash)
  return compare
}

module.exports = {
  hashPwd,
  comparePwd
}