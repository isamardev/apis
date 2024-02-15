const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');






// create main model
const Image = db.image;





// 1.create product
const addimages = async (req, res) => {

    try {

        if (req.files.photo.length > 0) {

            let info = {
                photo: dbConfig.mainUrl + req.files.photo[0].filename,
                businessId: req.body.businessId,
                referenceId: req.body.referenceId,
                reference: req.body.reference,
                internet: req.body.internet,
                status: false,
            }

            const image = await Image.create(info)
            return res.status(200).json({
                status: 'ok',
                data: image,
            })

        }
        else {
            res.status(200).json({
                status: 'fail',
                message: 'Must upload image.',
            })
        }


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all products
const getimages = async (req, res) => {

    try {

        let images = await Image.findAll({})
        res.status(200).json({
            status: 'ok',
            data: images,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}



// 3.get product by id
const getimageById = async (req, res) => {


    try {
        let id = req.params.id

        let image = await Image.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: image
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}







// 4.update product

const updateimage = async (req, res) => {

    try {
        let id = req.params.id

        let getimage = await Image.findOne({
            where: { id: id }
        })

        const photo = req.files.photo === undefined ? getimage.dataValues.photo : dbConfig.mainUrl + req.files.photo[0].filename

        const image = await Image.update({ ...req.body, photo: photo }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: image
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete product

const deleteimage = async (req, res) => {

    try {
        let id = req.params.id

        const image = await Image.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: image
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addimages,
    getimages,
    getimageById,
    updateimage,
    deleteimage,
}


