module.exports=(sequelize,DataTypes)=>{
    const Employe=sequelize.define('employe',{     
        businessId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        token:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        dob:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        city:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        country:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        role:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        department:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        employeStatus:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        employmentStartDate:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        employmentEndDate:{
            type: DataTypes.STRING,
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
        regularShift:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        workDays:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        hoursperDay:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        salary:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        permissions:{
            type: DataTypes.STRING,
            defaultValue: '[]',
            get() {
                const value = this.getDataValue('permissions');
                return value ? JSON.parse(value) : [];
            },
            set(value) {
                this.setDataValue('permissions', JSON.stringify(value));
            }
        },
        terminateReason:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        terminateDate:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        imageId:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        frontId:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        backId:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        certificateImage:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        experienceLetterImage:{
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

    return Employe

}