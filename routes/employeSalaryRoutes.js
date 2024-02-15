const { checkToken } = require('../auth/token_validation')
const employeSalaryController=require('../controllers/employeSalaryController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',employeSalaryController.getemployeSalarys)
router.post('/create',employeSalaryController.addemployeSalarys)

router.get('/get/:id',employeSalaryController.getemployeSalaryById)
router.put('/update/:id',employeSalaryController.updateemployeSalary)
router.delete('/delete/:id',employeSalaryController.deleteemployeSalary)


module.exports=router

