const express = require("express")
const { signup , signin} = require("../controller/userController")
const router = express.Router();
const auth = require('../middlewares/auth')

router.post('/signup' ,auth, signup)
router.post('/signin' , signin)

module.exports = router;

