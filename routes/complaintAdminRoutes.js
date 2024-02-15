const { checkToken } = require('../auth/token_validation')
const complaintAdminController=require('../controllers/complaintAdminController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',complaintAdminController.getcomplaintAdmins)
router.post('/create',complaintAdminController.addcomplaintAdmins)

router.get('/get/:id',complaintAdminController.getcomplaintAdminById)
router.put('/update/:id',complaintAdminController.updatecomplaintAdmin)
router.delete('/delete/:id',complaintAdminController.deletecomplaintAdmin)


module.exports=router

