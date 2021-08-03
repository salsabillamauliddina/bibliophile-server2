if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const port = process.env.PORT || 5000
const app = express()
const router = require('./routes')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Bibliophile is running on server ${port}`);
})