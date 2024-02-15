const db = require('../models');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Business = db.business;





// 1.create product
const addbusinesss = async (req, res) => {

    try {


        const password = req.body.password
        const email = req.body.email
        const pharmacyName = req.body.pharmacyName
        const pharmacyLogoId = req.body.pharmacyLogoId

        console.log(req.body);




        const gmail = await Business.findOne({
            where: {
                pharmacyName: pharmacyName
            }
        })

        const myshop = await Business.findOne({
            where: {
                email: email
            }
        })

        if (!myshop) {
            if (!pharmacyLogoId) {


                if (!gmail) {

                    if (password) {

                        let info = {
                            pharmacyLogoId: req.body.pharmacyLogoId,
                            fullName: req.body.fullName,
                            pharmacyName: req.body.pharmacyName,
                            aboutPharmacy: req.body.aboutPharmacy,
                            city: req.body.city,
                            phone: req.body.phone,
                            whatsapp: req.body.whatsapp,
                            address: req.body.address,
                            lat: req.body.lat,
                            lng: req.body.lng,
                            email: req.body.email,
                            token: req.body.token,
                            password: req.body.password,
                            payDate: req.body.payDate,
                            payAmount: req.body.payAmount,
                            internet: req.body.internet,
                            block: false,
                        }

                        const business = await Business.create(info)
                        return res.status(200).json({
                            status: 'ok',
                            data: business,
                        })

                    } else {
                        res.status(200).json({
                            status: 'fail',
                            message: 'Must enter password',
                        })
                    }
                }
                else {
                    res.status(200).json({
                        status: 'fail',
                        message: 'Email already exists',
                    })
                }

            }
            else {
                res.status(200).json({
                    status: 'fail',
                    message: 'Must upload pharmacy logo.',
                })
            }
        }
        else {
            res.status(200).json({
                status: 'fail',
                message: 'Pharmacy name already exists',
            })

        }


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all products
const getbusinesss = async (req, res) => {

    try {

        let businesss = await Business.findAll({})
        res.status(200).json({
            status: 'ok',
            data: businesss,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 2.get all products
const getactivebusinesss = async (req, res) => {

    try {

        let businesss = await Business.findAll({
            where: {
                block: false,
            }
        })
        res.status(200).json({
            status: 'ok',
            data: businesss,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}


// 3.get product by id
const getbusinessById = async (req, res) => {


    try {
        let id = req.params.id

        let business = await Business.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: business
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update product

const updatebusiness = async (req, res) => {

    try {
        let id = req.params.id


        const business = await Business.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: business
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete product

const deletebusiness = async (req, res) => {

    try {
        let id = req.params.id

        const business = await Business.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: business
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addbusinesss,
    getbusinesss,
    getactivebusinesss,
    getbusinessById,
    updatebusiness,
    deletebusiness,
}


