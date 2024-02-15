module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        fullName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        businessId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Walkin Customer'
        },
        age: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        loyaltyPoint: {
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

    return Customer

}