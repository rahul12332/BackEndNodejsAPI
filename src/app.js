const dotenv = require('dotenv')
const express = require('express')
const app = express()
require("./db/conn")
const cors = require('cors')
dotenv.config({path: '../config.env'});
app.use(express.json());
app.use(require('./routes/auth')) // => we link our routes in routes folder auth.js it is middleware function and it is a part of express
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
