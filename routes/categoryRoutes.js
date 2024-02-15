const { checkToken } = require('../auth/token_validation')
const categoryController=require('../controllers/categoryController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',categoryController.getcategorys)
router.get('/access/:id/:employId',categoryController.categoryAccesscategorys)
router.post('/create',categoryController.addcategorys)

router.get('/get/:id',categoryController.getcategoryById)
router.put('/update/:id',categoryController.updatecategory)
router.delete('/delete/:id',categoryController.deletecategory)


module.exports=router

