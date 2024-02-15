const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Employe = db.employe;





// 1.create employe
const addemployes = async (req, res) => {

    try {

        let info = {
            businessId: req.body.businessId,
            token: req.body.token,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dob: req.body.dob,
            gender: req.body.gender,
            phone: req.body.phone,
            email: req.body.email,
            city: req.body.city,
            country: req.body.country,
            address: req.body.address,
            role: req.body.role,
            department: req.body.department,
            employeStatus: req.body.employeStatus,
            employmentStartDate: req.body.employmentStartDate,
            employmentEndDate: req.body.employmentEndDate,
            workStartTime: req.body.workStartTime,
            workEndTime: req.body.workEndTime,
            regularShift: req.body.regularShift,
            workDays: req.body.workDays,
            hoursperDay: req.body.hoursperDay,
            salary: req.body.salary,
            permissions: req.body.permissions,
            terminateReason: req.body.terminateReason,
            terminateDate: req.body.terminateDate,
            imageId: req.body.imageId,
            frontId: req.body.frontId,
            backId: req.body.backId,
            certificateImage: req.body.certificateImage,
            experienceLetterImage: req.body.experienceLetterImage,
            internet: req.body.internet,
            status: true,
        }

        const employe = await Employe.create(info)
        return res.status(200).json({
            status: 'ok',
            data: employe,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all employes
const getemployes = async (req, res) => {

    try {

        let employes = await Employe.findAll({})
        res.status(200).json({
            status: 'ok',
            data: employes,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get employe by id
const getemployeById = async (req, res) => {


    try {
        let id = req.params.id

        let employe = await Employe.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: employe
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update employe

const updateemploye = async (req, res) => {

    try {
        let id = req.params.id


        const employe = await Employe.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: employe
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete employe

const deleteemploye = async (req, res) => {

    try {
        let id = req.params.id

        const employe = await Employe.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: employe
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addemployes,
    getemployes,
    getemployeById,
    updateemploye,
    deleteemploye,
}


