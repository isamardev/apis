const { checkToken } = require('../auth/token_validation')
const businessController=require('../controllers/businessController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',businessController.getbusinesss)
router.get('/active/get',businessController.getactivebusinesss)
router.post('/create',businessController.addbusinesss)

router.get('/get/:id',businessController.getbusinessById)
router.put('/update/:id',businessController.updatebusiness)
router.delete('/delete/:id',businessController.deletebusiness)


module.exports=router

