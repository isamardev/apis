const { checkToken } = require('../auth/token_validation')
const employeLeaveController=require('../controllers/employeLeaveController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',employeLeaveController.getemployeLeaves)
router.post('/create',employeLeaveController.addemployeLeaves)

router.get('/get/:id',employeLeaveController.getemployeLeaveById)
router.put('/update/:id',employeLeaveController.updateemployeLeave)
router.delete('/delete/:id',employeLeaveController.deleteemployeLeave)


module.exports=router

