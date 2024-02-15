module.exports = (sequelize, DataTypes) => {
    const EmployeLeave = sequelize.define('employeLeave', {
        employeId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        businessId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        startLeaveDateTime:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        endLeaveDateTime:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        leaveReason:{
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

    return EmployeLeave

}