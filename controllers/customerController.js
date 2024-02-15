const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Customer = db.customer;





// 1.create customer
const addcustomers = async (req, res) => {

    try {

        let info = {
            businessId: req.body.businessId,
            fullName: req.body.fullName,
            type: req.body.type,
            age: req.body.age,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            loyaltyPoint: req.body.loyaltyPoint,
            internet: req.body.internet,
            status: true,
        }

        const customer = await Customer.create(info)
        return res.status(200).json({
            status: 'ok',
            data: customer,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all customers
const getcustomers = async (req, res) => {

    try {

        let customers = await Customer.findAll({})
        res.status(200).json({
            status: 'ok',
            data: customers,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get customer by id
const getcustomerById = async (req, res) => {


    try {
        let id = req.params.id

        let customer = await Customer.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: customer
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update customer

const updatecustomer = async (req, res) => {

    try {
        let id = req.params.id


        const customer = await Customer.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: customer
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete customer

const deletecustomer = async (req, res) => {

    try {
        let id = req.params.id

        const customer = await Customer.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: customer
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addcustomers,
    getcustomers,
    getcustomerById,
    updatecustomer,
    deletecustomer,
}


