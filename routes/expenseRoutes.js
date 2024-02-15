const { checkToken } = require('../auth/token_validation')
const expenseController=require('../controllers/expenseController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',expenseController.getexpenses)
router.post('/create',expenseController.addexpenses)

router.get('/get/:id',expenseController.getexpenseById)
router.put('/update/:id',expenseController.updateexpense)
router.delete('/delete/:id',expenseController.deleteexpense)


module.exports=router

