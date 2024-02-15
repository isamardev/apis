const { checkToken } = require('../auth/token_validation')
const customerController=require('../controllers/customerController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',customerController.getcustomers)
router.post('/create',customerController.addcustomers)

router.get('/get/:id',customerController.getcustomerById)
router.put('/update/:id',customerController.updatecustomer)
router.delete('/delete/:id',customerController.deletecustomer)


module.exports=router

