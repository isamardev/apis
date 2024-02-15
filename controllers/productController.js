const db = require('../models/index.js');
const { hashSync, genSaltSync } = require('bcrypt')
const dbConfig = require('../config/dbConfig.js');
const { sendMail } = require('../otp/OTPVerification.js');
const { sign } = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');


// create main model
const Product = db.product;





// 1.create product
const addproducts = async (req, res) => {

    try {

        let info = {
            businessId: req.body.businessId,
            name: req.body.name,
            code: req.body.code,
            unit: req.body.unit,
            manufacturer: req.body.manufacturer,
            imageId: req.body.imageId,
            description: req.body.description,
            expiryDate: req.body.expiryDate,
            stock: req.body.stock,
            minStock: req.body.minStock,
            stockAlert: req.body.stockAlert,
            costPrice: req.body.costPrice,
            sellingPrice: req.body.sellingPrice,
            categoryId: req.body.categoryId,
            supplierId: req.body.supplierId,
            location: req.body.location,
            storageCondition: req.body.storageCondition,
            barcode: req.body.barcode,
            formula: req.body.formula,
            bulkPrice: req.body.bulkPrice,
            weight: req.body.weight,
            internet: req.body.internet,
            status: true,
        }

        const product = await Product.create(info)
        return res.status(200).json({
            status: 'ok',
            data: product,
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 2.get all products
const getproducts = async (req, res) => {

    try {

        let products = await Product.findAll({})
        res.status(200).json({
            status: 'ok',
            data: products,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 3.get product by id
const getproductById = async (req, res) => {


    try {
        let id = req.params.id

        let product = await Product.findOne({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: product
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}




// 4.update product

const updateproduct = async (req, res) => {

    try {
        let id = req.params.id


        const product = await Product.update({ ...req.body }, {
            where: { id: id }
        }
        )
        res.status(200).json({
            status: 'ok',
            data: product
        })


    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

}






// 5.delete product

const deleteproduct = async (req, res) => {

    try {
        let id = req.params.id

        const product = await Product.destroy({
            where: { id: id }
        })
        res.status(200).json({
            status: 'ok',
            data: product
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }


}





module.exports = {
    addproducts,
    getproducts,
    getproductById,
    updateproduct,
    deleteproduct,
}


