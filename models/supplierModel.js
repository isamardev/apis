module.exports=(sequelize,DataTypes)=>{
    const Supplier=sequelize.define('supplier',{     
        name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        businessId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        code:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        type:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        catalog:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        rating:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        city:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        whatsapp:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        email:{
            type: DataTypes.STRING,
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
        block:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        internet:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        
    })

    return Supplier

}