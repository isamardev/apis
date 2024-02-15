module.exports = (sequelize, DataTypes) => {
    const EmployeSalary = sequelize.define('employeSalary', {
        employeId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        businessId:{ 
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        salary: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bonus: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        benefits: {
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

    return EmployeSalary

}