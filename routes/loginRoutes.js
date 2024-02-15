const { checkToken } = require('../auth/token_validation')
const loginController=require('../controllers/loginController')

const router=require('express').Router()

router.post('/business',loginController.loginbusiness)
router.put('/forgetBusinessPassword',loginController.forgetBusinessPassword)
router.put('/updateBusinessPassword',loginController.updateBusinessPassword)
router.post('/admin',loginController.loginAdmin)

module.exports=router

