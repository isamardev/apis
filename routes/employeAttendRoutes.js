const { checkToken } = require('../auth/token_validation')
const employeAttendController=require('../controllers/employeAttendController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',employeAttendController.getemployeAttends)
router.post('/create',employeAttendController.addemployeAttends)

router.get('/get/:id',employeAttendController.getemployeAttendById)
router.put('/update/:id',employeAttendController.updateemployeAttend)
router.delete('/delete/:id',employeAttendController.deleteemployeAttend)


module.exports=router

