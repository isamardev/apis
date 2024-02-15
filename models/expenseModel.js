module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define('expense', {
        businessId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        employeId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        paymentDate: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tax: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        vendorName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        vendorPhone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        paymentStatus: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        expenseStatus: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        attachmentId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        lat:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        lng:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        internet: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    })

    return Expense

}