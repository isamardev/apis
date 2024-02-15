const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Expense = db.expense;





// 1.create expense
const addexpenses = async (req, res) => {

    try {

        let info = {
            businessId: req.body.businessId,
            employeId: req.body.employeId,
            paymentDate: req.body.paymentDate,
            category: req.body.category,
            amount: req.body.amount,
            attachmentId: req.body.attachmentId,
            tax: req.body.tax,
            vendorName: req.body.vendorName,
            vendorPhone: req.body.vendorPhone,
            paymentMethod: req.body.paymentMethod,
            paymentStatus: req.body.paymentStatus,
            expenseStatus: req.body.expenseStatus,
            description: req.body.description,
            address: req.body.address,
            lat: req.body.lat,
            lng: req.body.lng,
            feedback: req.body.feedback,
            internet: req.body.internet,
            status: true,
        }

        const expense = await Expense.create(info)
        return res.status(200).json({
            status: 'ok',
            data: expense,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all expenses
const getexpenses = async (req, res) => {

    try {

        let expenses = await Expense.findAll({})
        res.status(200).json({
            status: 'ok',
            data: expenses,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get expense by id
const getexpenseById = async (req, res) => {


    try {
        let id = req.params.id

        let expense = await Expense.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: expense
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update expense

const updateexpense = async (req, res) => {

    try {
        let id = req.params.id


        const expense = await Expense.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: expense
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete expense

const deleteexpense = async (req, res) => {

    try {
        let id = req.params.id

        const expense = await Expense.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: expense
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addexpenses,
    getexpenses,
    getexpenseById,
    updateexpense,
    deleteexpense,
}


