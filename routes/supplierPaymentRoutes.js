const { checkToken } = require('../auth/token_validation')
const supplierPaymentController=require('../controllers/supplierPaymentController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',supplierPaymentController.getsupplierPayments)
router.post('/create',supplierPaymentController.addsupplierPayments)

router.get('/get/:id',supplierPaymentController.getsupplierPaymentById)
router.put('/update/:id',supplierPaymentController.updatesupplierPayment)
router.delete('/delete/:id',supplierPaymentController.deletesupplierPayment)


module.exports=router

