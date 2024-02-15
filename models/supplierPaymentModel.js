module.exports=(sequelize,DataTypes)=>{
    const SupplierPayment=sequelize.define('supplierPayment',{     
        productId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        businessId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        method:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        amount:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        charges:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        paymentStatus:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        paymentLastDate:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        internet:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        
    })

    return SupplierPayment

}