const db = require('../models');
const { compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const dbConfig = require('../config/dbConfig.js')
const nodemailer = require('nodemailer');

const Business = db.business;









const loginbusiness = async (req, res) => {
    try {
        console.log(req.body);
        let info = {
            email: req.body.email,
            password: req.body.password,
        }


        const userData = await Business.findOne({
            where: {
                email: info.email,
            }
        })

        if (userData) {
            // const result=compareSync(info.password, userData.password)
            if (info.password === userData.password) {

                res.status(200).json({
                    status: 'ok',
                    message: "Successfully logged in",
                    data: userData,
                })
            } else {
                res.status(200).json({
                    status: 'fail',
                    message: 'Wrong Password',
                })
            }

        } else {
            res.status(200).json({
                status: 'fail',
                message: 'Email not found',
            })

        }

    }
    catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



const forgetBusinessPassword = async (req, res) => {

    try {

        let info = {
            email: req.body.email,
            phone: req.body.phone,
        }



        const guser = await Business.findOne({
            where: {
                email: info.email,
                phone: info.phone,
            }
        })

        if (guser) {

            res.status(200).json({
                status: 'ok',
                data: guser,
            })


        }

        else{

            res.status(200).json({
                status: 'fail',
                message: 'First Register yourself!',
            })

        }



    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




const updateBusinessPassword = async (req, res) => {

    try {

        let info = {
            email: req.body.email,
            phone: req.body.phone,
        }



        const guser = await Business.findOne({
            where: {
                email: info.email,phone: info.phone
            }
        })

        if (guser) {


            const guser = await Business.update({password:req.body.password},{
                where: {
                    email: info.email
                }
            })

            return res.status(200).json({
                status: 'ok',
                message: 'Updated Successfully',
                data:guser
            })


        }

        else{

            res.status(200).json({
                status: 'fail',
                message: 'First Register yourself!',
            })

        }


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






module.exports = {
    loginbusiness,
    forgetBusinessPassword,
    updateBusinessPassword,
}