const { checkToken } = require('../auth/token_validation')
const imageController=require('../controllers/imageController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',imageController.getimages)
router.post('/create',upload.fields([{name:'photo',maxCount:1}]),imageController.addimages)

router.get('/get/:id',imageController.getimageById)
router.put('/update/:id',upload.fields([{name:'photo',maxCount:1}]),imageController.updateimage)
router.delete('/delete/:id',imageController.deleteimage)


module.exports=router

