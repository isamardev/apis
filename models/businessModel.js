module.exports=(sequelize,DataTypes)=>{
    const Business=sequelize.define('business',{     
        fullName:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        token:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        pharmacyName:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        aboutPharmacy:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        pharmacyLogoId:{
            type: DataTypes.INTEGER,
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
        password:{
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
        payDate:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        payAmount:{
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

    return Business

}