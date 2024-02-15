const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const EmployeLeave = db.employeLeave;





// 1.create employeLeave
const addemployeLeaves = async (req, res) => {

    try {

        let info = {
            businessId: req.body.businessId,
            employeId: req.body.employeId,
            startLeaveDateTime: req.body.startLeaveDateTime,
            endLeaveDateTime: req.body.endLeaveDateTime,
            leaveReason: req.body.leaveReason,
            address: req.body.address,
            lat: req.body.lat,
            lng: req.body.lng,
            internet: req.body.internet,
            status: true,
        }

        const employeLeave = await EmployeLeave.create(info)
        return res.status(200).json({
            status: 'ok',
            data: employeLeave,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all employeLeaves
const getemployeLeaves = async (req, res) => {

    try {

        let employeLeaves = await EmployeLeave.findAll({})
        res.status(200).json({
            status: 'ok',
            data: employeLeaves,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get employeLeave by id
const getemployeLeaveById = async (req, res) => {


    try {
        let id = req.params.id

        let employeLeave = await EmployeLeave.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: employeLeave
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update employeLeave

const updateemployeLeave = async (req, res) => {

    try {
        let id = req.params.id


        const employeLeave = await EmployeLeave.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: employeLeave
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete employeLeave

const deleteemployeLeave = async (req, res) => {

    try {
        let id = req.params.id

        const employeLeave = await EmployeLeave.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: employeLeave
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addemployeLeaves,
    getemployeLeaves,
    getemployeLeaveById,
    updateemployeLeave,
    deleteemployeLeave,
}


