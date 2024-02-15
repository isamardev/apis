const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const EmployeAttend = db.employeAttend;





// 1.create employeAttend
const addemployeAttends = async (req, res) => {

    try {

        let info = {
            businessId: req.body.businessId,
            employeId: req.body.employeId,
            workStartTime: req.body.workStartTime,
            workEndTime: req.body.workEndTime,
            inDateTime: req.body.inDateTime,
            outDateTime: req.body.outDateTime,
            hoursperDay: req.body.hoursperDay,
            extraWorkperDay: req.body.extraWorkperDay,
            extraWorkReason: req.body.extraWorkReason,
            lateComingReason: req.body.lateComingReason,
            address: req.body.address,
            lat: req.body.lat,
            lng: req.body.lng,
            internet: req.body.internet,
            status: true,
        }

        const employeAttend = await EmployeAttend.create(info)
        return res.status(200).json({
            status: 'ok',
            data: employeAttend,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all employeAttends
const getemployeAttends = async (req, res) => {

    try {

        let employeAttends = await EmployeAttend.findAll({})
        res.status(200).json({
            status: 'ok',
            data: employeAttends,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get employeAttend by id
const getemployeAttendById = async (req, res) => {


    try {
        let id = req.params.id

        let employeAttend = await EmployeAttend.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: employeAttend
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update employeAttend

const updateemployeAttend = async (req, res) => {

    try {
        let id = req.params.id


        const employeAttend = await EmployeAttend.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: employeAttend
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete employeAttend

const deleteemployeAttend = async (req, res) => {

    try {
        let id = req.params.id

        const employeAttend = await EmployeAttend.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: employeAttend
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addemployeAttends,
    getemployeAttends,
    getemployeAttendById,
    updateemployeAttend,
    deleteemployeAttend,
}


