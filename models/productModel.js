module.exports=(sequelize,DataTypes)=>{
    const Product=sequelize.define('product',{     
        name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        code:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        unit:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        manufacturer:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        imageId:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        expiryDate:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        stock:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        minStock:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        stockAlert:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        costPrice:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        sellingPrice:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        categoryId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        supplierId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        businessId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        location:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        storageCondition:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        barcode:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        formula:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        bulkPrice:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        weight:{
            type: DataTypes.STRING,
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

    return Product

}