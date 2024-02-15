const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const EmployeSalary = db.employeSalary;





// 1.create employeSalary
const addemployeSalarys = async (req, res) => {

    try {

        let info = {
            businessId: req.body.businessId,
            employeId: req.body.employeId,
            salary: req.body.salary,
            bonus: req.body.bonus,
            benefits: req.body.benefits,
            internet: req.body.internet,
            status: true,
        }

        const employeSalary = await EmployeSalary.create(info)
        return res.status(200).json({
            status: 'ok',
            data: employeSalary,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all employeSalarys
const getemployeSalarys = async (req, res) => {

    try {

        let employeSalarys = await EmployeSalary.findAll({})
        res.status(200).json({
            status: 'ok',
            data: employeSalarys,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get employeSalary by id
const getemployeSalaryById = async (req, res) => {


    try {
        let id = req.params.id

        let employeSalary = await EmployeSalary.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: employeSalary
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update employeSalary

const updateemployeSalary = async (req, res) => {

    try {
        let id = req.params.id


        const employeSalary = await EmployeSalary.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: employeSalary
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete employeSalary

const deleteemployeSalary = async (req, res) => {

    try {
        let id = req.params.id

        const employeSalary = await EmployeSalary.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: employeSalary
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addemployeSalarys,
    getemployeSalarys,
    getemployeSalaryById,
    updateemployeSalary,
    deleteemployeSalary,
}


