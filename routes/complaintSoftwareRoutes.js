const { checkToken } = require('../auth/token_validation')
const complaintSoftwareController=require('../controllers/complaintSoftwareController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',complaintSoftwareController.getcomplaintSoftwares)
router.post('/create',complaintSoftwareController.addcomplaintSoftwares)

router.get('/get/:id',complaintSoftwareController.getcomplaintSoftwareById)
router.put('/update/:id',complaintSoftwareController.updatecomplaintSoftware)
router.delete('/delete/:id',complaintSoftwareController.deletecomplaintSoftware)


module.exports=router

