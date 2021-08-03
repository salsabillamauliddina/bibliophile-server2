const axios = require('axios')

let baseUrl = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json'
let baseUrl1 = 'https://api.nytimes.com/svc/topstories/v2/books.json'
const Key = process.env.Key

// const Secret = process.env.Secret

class ApiController {
  static getBookTop (req,res,next) {
    axios
      .get(`${baseUrl}?api-key=${Key}`)
      .then(({data}) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      })
  }

  static getArticleBooks (req,res,next) {
    axios
    .get(`${baseUrl1}?api-key=${Key}`)
    .then(({data}) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err)
    })
  }
}

module.exports = ApiController;