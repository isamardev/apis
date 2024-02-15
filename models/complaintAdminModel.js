module.exports = (sequelize, DataTypes) => {
    const ComplaintAdmin = sequelize.define('complaintAdmin', {
        businessId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        employeId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        attachmentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        reason: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        feedback: {
            type: DataTypes.TEXT,
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

    return ComplaintAdmin

}