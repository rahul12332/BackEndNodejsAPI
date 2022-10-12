const dotenv = require('dotenv')
const express = require('express')
const app = express()
const path = require('path')
dotenv.config({path: '../config.env'});
require("./db/conn")
const cors = require('cors')

app.use(express.json());
app.use(require('./routes/auth')) // => we link our routes in routes folder auth.js it is middleware function and it is a part of express
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../c-19frontend/build")))


app.get("*", function(_, res){
  res.sendFile(
    path.join(__dirname, "../c-19frontend/build/index.html"),
    function(err){
      if(err){
        res.status(500).send(err)
      }
    }
  )
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
