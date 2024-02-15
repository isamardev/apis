module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('image', {
        businessId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        referenceId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        photo: {
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

    return Image

}