const express = require("express");

const auth = require("./middlewares/auth")
const filerouter = express.Router()
const uploadfile = require("./controller/fileController")

filerouter.post("/",auth,uploadfile)


module.exports = filerouter