const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const ComplaintAdmin = db.complaintAdmin;





// 1.create complaintAdmin
const addcomplaintAdmins = async (req, res) => {

    try {

        let info = {
            employeId: req.body.employeId,
            businessId: req.body.businessId,
            type: req.body.type,
            priority: req.body.priority,
            attachmentId: req.body.attachmentId,
            reason: req.body.reason,
            feedback: req.body.feedback,
            internet: req.body.internet,
            status: true,
        }

        const complaintAdmin = await ComplaintAdmin.create(info)
        return res.status(200).json({
            status: 'ok',
            data: complaintAdmin,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all complaintAdmins
const getcomplaintAdmins = async (req, res) => {

    try {

        let complaintAdmins = await ComplaintAdmin.findAll({})
        res.status(200).json({
            status: 'ok',
            data: complaintAdmins,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get complaintAdmin by id
const getcomplaintAdminById = async (req, res) => {


    try {
        let id = req.params.id

        let complaintAdmin = await ComplaintAdmin.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: complaintAdmin
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update complaintAdmin

const updatecomplaintAdmin = async (req, res) => {

    try {
        let id = req.params.id


        const complaintAdmin = await ComplaintAdmin.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: complaintAdmin
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete complaintAdmin

const deletecomplaintAdmin = async (req, res) => {

    try {
        let id = req.params.id

        const complaintAdmin = await ComplaintAdmin.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: complaintAdmin
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addcomplaintAdmins,
    getcomplaintAdmins,
    getcomplaintAdminById,
    updatecomplaintAdmin,
    deletecomplaintAdmin,
}


