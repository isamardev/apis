module.exports = (sequelize, DataTypes) => {
    const EmployeAttend = sequelize.define('employeAttend', {
        employeId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        businessId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        workStartTime:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        workEndTime:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        inDateTime: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        outDateTime: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hoursperDay:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        extraWorkperDay:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        extraWorkReason:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        lateComingReason:{
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

    return EmployeAttend

}