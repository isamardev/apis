const { checkToken } = require('../auth/token_validation')
const employeController=require('../controllers/employeController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',employeController.getemployes)
router.post('/create',employeController.addemployes)

router.get('/get/:id',employeController.getemployeById)
router.put('/update/:id',employeController.updateemploye)
router.delete('/delete/:id',employeController.deleteemploye)


module.exports=router

