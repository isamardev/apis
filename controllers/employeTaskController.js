const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const EmployeTask = db.employeTask;





// 1.create employeTask
const addemployeTasks = async (req, res) => {

    try {

        let info = {
            businessId: req.body.businessId,
            employeId: req.body.employeId,
            endResolveDate: req.body.endResolveDate,
            type: req.body.type,
            priority: req.body.priority,
            attachmentId: req.body.attachmentId,
            reason: req.body.reason,
            feedback: req.body.feedback,
            internet: req.body.internet,
            status: true,
        }

        const employeTask = await EmployeTask.create(info)
        return res.status(200).json({
            status: 'ok',
            data: employeTask,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all employeTasks
const getemployeTasks = async (req, res) => {

    try {

        let employeTasks = await EmployeTask.findAll({})
        res.status(200).json({
            status: 'ok',
            data: employeTasks,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get employeTask by id
const getemployeTaskById = async (req, res) => {


    try {
        let id = req.params.id

        let employeTask = await EmployeTask.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: employeTask
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update employeTask

const updateemployeTask = async (req, res) => {

    try {
        let id = req.params.id


        const employeTask = await EmployeTask.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: employeTask
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete employeTask

const deleteemployeTask = async (req, res) => {

    try {
        let id = req.params.id

        const employeTask = await EmployeTask.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: employeTask
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addemployeTasks,
    getemployeTasks,
    getemployeTaskById,
    updateemployeTask,
    deleteemployeTask,
}


