module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        }, 
        businessId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        categoryAccess: {
            type: DataTypes.STRING,
            defaultValue: '[]',
            get() {
                const value = this.getDataValue('categoryAccess');
                return value ? JSON.parse(value) : [];
            },
            set(value) {
                this.setDataValue('categoryAccess', JSON.stringify(value));
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        attributes: {
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

    return Category

}