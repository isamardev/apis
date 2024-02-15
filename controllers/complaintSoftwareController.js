const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const ComplaintSoftware = db.complaintSoftware;





// 1.create complaintSoftware
const addcomplaintSoftwares = async (req, res) => {

    try {

        let info = {
            businessId: req.body.businessId,
            endResolveDate: req.body.endResolveDate,
            type: req.body.type,
            priority: req.body.priority,
            attachmentId: req.body.attachmentId,
            reason: req.body.reason,
            feedback: req.body.feedback,
            internet: req.body.internet,
            status: true,
        }

        const complaintSoftware = await ComplaintSoftware.create(info)
        return res.status(200).json({
            status: 'ok',
            data: complaintSoftware,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all complaintSoftwares
const getcomplaintSoftwares = async (req, res) => {

    try {

        let complaintSoftwares = await ComplaintSoftware.findAll({})
        res.status(200).json({
            status: 'ok',
            data: complaintSoftwares,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get complaintSoftware by id
const getcomplaintSoftwareById = async (req, res) => {


    try {
        let id = req.params.id

        let complaintSoftware = await ComplaintSoftware.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: complaintSoftware
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update complaintSoftware

const updatecomplaintSoftware = async (req, res) => {

    try {
        let id = req.params.id


        const complaintSoftware = await ComplaintSoftware.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: complaintSoftware
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete complaintSoftware

const deletecomplaintSoftware = async (req, res) => {

    try {
        let id = req.params.id

        const complaintSoftware = await ComplaintSoftware.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: complaintSoftware
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addcomplaintSoftwares,
    getcomplaintSoftwares,
    getcomplaintSoftwareById,
    updatecomplaintSoftware,
    deletecomplaintSoftware,
}


