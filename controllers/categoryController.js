const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Category = db.category;





// 1.create category
const addcategorys = async (req, res) => {

    try {

        let info = {
            name: req.body.name,
            businessId: req.body.businessId,
            code: req.body.code,
            description: req.body.description,
            attributes: req.body.attributes,
            internet: req.body.internet,
            status: true,
        }

        const category = await Category.create(info)
        return res.status(200).json({
            status: 'ok',
            data: category,
        })









    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all categorys
const getcategorys = async (req, res) => {

    try {

        let categorys = await Category.findAll({})
        res.status(200).json({
            status: 'ok',
            data: categorys,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 2.get all categorys
const categoryAccesscategorys = async (req, res) => {

    try {
        
        let id = req.params.id
        let employId = req.params.employId

        let category = await Category.findOne({
            where: { id: id }
        })


        if (category.categoryAccess.includes(employId)) {

            const myFollow = category?.categoryAccess.filter(i => i !== (employId))
            const newUserFollow = await Category.update({ categoryAccess: myFollow }, {
                where: { id: id }
            })

            res.status(200).json({
                status: 'ok',
                data: newUserFollow,
                message: 'You remove employ from category.'
            })
        }
        else {
            
            var mycategory=category?.categoryAccess
            mycategory.push(employId)

            const newUserFollow = await Category.update({ categoryAccess: mycategory }, {
                where: { id: id }
            })


            res.status(200).json({
                status: 'ok',
                data: newUserFollow,
                message: 'You add employ to category.'
            })


        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}





// 3.get category by id
const getcategoryById = async (req, res) => {


    try {
        let id = req.params.id

        let category = await Category.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: category
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update category

const updatecategory = async (req, res) => {

    try {
        let id = req.params.id


        const category = await Category.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: category
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete category

const deletecategory = async (req, res) => {

    try {
        let id = req.params.id

        const category = await Category.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: category
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addcategorys,
    getcategorys,
    categoryAccesscategorys,
    getcategoryById,
    updatecategory,
    deletecategory,
}


