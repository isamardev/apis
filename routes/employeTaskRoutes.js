const { checkToken } = require('../auth/token_validation')
const employeTaskController=require('../controllers/employeTaskController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',employeTaskController.getemployeTasks)
router.post('/create',employeTaskController.addemployeTasks)

router.get('/get/:id',employeTaskController.getemployeTaskById)
router.put('/update/:id',employeTaskController.updateemployeTask)
router.delete('/delete/:id',employeTaskController.deleteemployeTask)


module.exports=router

