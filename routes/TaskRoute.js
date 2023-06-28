const express = require("express")
const router = express.Router();
const limiter = require('../middlewares/ratelimiter_auth')
const { createTask ,getTask, deleteTask, updateTask, getTaskByStatus} = require('../controller/taskController');
const auth = require("../middlewares/auth");

router.get('/' ,auth, getTask)
router.post('/update' ,auth,limiter,createTask)
router.delete('/:id',auth,deleteTask)
router.put("/:id",auth,updateTask)
router.get('/getTaskByStatus' ,auth, getTaskByStatus)
router.post('/catByTask',catByTask)


module.exports = router
