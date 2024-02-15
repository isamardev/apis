const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const SupplierPayment = db.supplierPayment;





// 1.create supplierPayment
const addsupplierPayments = async (req, res) => {

    try {

        let info = {
            businessId: req.body.businessId,
            productId: req.body.productId,
            method: req.body.method,
            amount: req.body.amount,
            charges: req.body.charges,
            paymentStatus: req.body.paymentStatus,
            description: req.body.description,
            paymentLastDate: req.body.paymentLastDate,
            internet: req.body.internet,
            status: true,
        }

        const supplierPayment = await SupplierPayment.create(info)
        return res.status(200).json({
            status: 'ok',
            data: supplierPayment,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all supplierPayments
const getsupplierPayments = async (req, res) => {

    try {

        let supplierPayments = await SupplierPayment.findAll({})
        res.status(200).json({
            status: 'ok',
            data: supplierPayments,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get supplierPayment by id
const getsupplierPaymentById = async (req, res) => {


    try {
        let id = req.params.id

        let supplierPayment = await SupplierPayment.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: supplierPayment
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update supplierPayment

const updatesupplierPayment = async (req, res) => {

    try {
        let id = req.params.id


        const supplierPayment = await SupplierPayment.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: supplierPayment
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete supplierPayment

const deletesupplierPayment = async (req, res) => {

    try {
        let id = req.params.id

        const supplierPayment = await SupplierPayment.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: supplierPayment
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addsupplierPayments,
    getsupplierPayments,
    getsupplierPaymentById,
    updatesupplierPayment,
    deletesupplierPayment,
}


