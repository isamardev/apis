const dbConfig = require('../config/dbConfig.js')
const {Sequelize,DataTypes}=require('sequelize')


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            idle:dbConfig.pool.idle,
            acquire:dbConfig.pool.acquire,
        }
    }
)


sequelize.authenticate().then(()=>{
    console.log('Connected to database')
    console.log('Creating tables')
}).catch((err)=>{
    console.log(err)
})


const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize





db.business=require('./businessModel.js')(sequelize,DataTypes)
db.category=require('./categoryModel.js')(sequelize,DataTypes)
db.image=require('./imageModel.js')(sequelize,DataTypes)
db.complaintAdmin=require('./complaintAdminModel.js')(sequelize,DataTypes)
db.complaintSoftware=require('./complaintSoftwareModel.js')(sequelize,DataTypes)
db.customer=require('./customerModel.js')(sequelize,DataTypes)
db.employeAttend=require('./employeAttendModel.js')(sequelize,DataTypes)
db.employeLeave=require('./employeLeaveModel.js')(sequelize,DataTypes)
db.employe=require('./employeModel.js')(sequelize,DataTypes)
db.employeSalary=require('./employeSalaryModel.js')(sequelize,DataTypes)
db.employeTask=require('./employeTaskModel.js')(sequelize,DataTypes)
db.expense=require('./expenseModel.js')(sequelize,DataTypes)
db.product=require('./productModel.js')(sequelize,DataTypes)
db.supplierPayment=require('./supplierPaymentModel.js')(sequelize,DataTypes)






db.sequelize.sync({force:false}).then(()=>{
    console.log('Yes Re-Sync Complete')
})











// business

db.image.hasMany(db.business,{
    foreignKey:'pharmacyLogoId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.business.belongsTo(db.image,{
    foreignKey:'pharmacyLogoId',
    as:'pharmacyLogo',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})













// category

db.business.hasMany(db.category,{
    foreignKey:'businessId',
    as:'category',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.category.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})
















// ComplaintAdmin


db.image.hasMany(db.complaintAdmin,{
    foreignKey:'attachmentId',
    as:'complaintAdmin',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.complaintAdmin.belongsTo(db.image,{
    foreignKey:'attachmentId',
    as:'attachment',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.business.hasMany(db.complaintAdmin,{
    foreignKey:'businessId',
    as:'complaintAdmin',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.complaintAdmin.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.employe.hasMany(db.complaintAdmin,{
    foreignKey:'employeId',
    as:'complaintAdmin',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.complaintAdmin.belongsTo(db.employe,{
    foreignKey:'employeId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})


















// complaintSoftware


db.image.hasMany(db.complaintSoftware,{
    foreignKey:'attachmentId',
    as:'complaintSoftware',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.complaintSoftware.belongsTo(db.image,{
    foreignKey:'attachmentId',
    as:'attachment',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.business.hasMany(db.complaintSoftware,{
    foreignKey:'businessId',
    as:'complaintSoftware',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.complaintSoftware.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

















// customer

db.business.hasMany(db.customer,{
    foreignKey:'businessId',
    as:'customer',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.customer.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})






















// employeAttend


db.business.hasMany(db.employeAttend,{
    foreignKey:'businessId',
    as:'employeAttend',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employeAttend.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.employe.hasMany(db.employeAttend,{
    foreignKey:'employeId',
    as:'employeAttend',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employeAttend.belongsTo(db.employe,{
    foreignKey:'employeId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

























// employeLeave


db.business.hasMany(db.employeLeave,{
    foreignKey:'businessId',
    as:'employeLeave',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employeLeave.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.employe.hasMany(db.employeLeave,{
    foreignKey:'employeId',
    as:'employeLeave',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employeLeave.belongsTo(db.employe,{
    foreignKey:'employeId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})
























// employe


db.image.hasMany(db.employe,{
    foreignKey:'imageId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employe.belongsTo(db.image,{
    foreignKey:'imageId',
    as:'image',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.image.hasMany(db.employe,{
    foreignKey:'frontId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employe.belongsTo(db.image,{
    foreignKey:'frontId',
    as:'image',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.image.hasMany(db.employe,{
    foreignKey:'backId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employe.belongsTo(db.image,{
    foreignKey:'backId',
    as:'image',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})



db.business.hasMany(db.employe,{
    foreignKey:'businessId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employe.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})
























// employeSalary


db.business.hasMany(db.employeSalary,{
    foreignKey:'businessId',
    as:'employeSalary',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employeSalary.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.employe.hasMany(db.employeSalary,{
    foreignKey:'employeId',
    as:'employeSalary',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employeSalary.belongsTo(db.employe,{
    foreignKey:'employeId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})



























// employeTask


db.business.hasMany(db.employeTask,{
    foreignKey:'businessId',
    as:'employeTask',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employeTask.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.employe.hasMany(db.employeTask,{
    foreignKey:'employeId',
    as:'employeTask',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employeTask.belongsTo(db.employe,{
    foreignKey:'employeId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})







db.image.hasMany(db.employeTask,{
    foreignKey:'attachmentId',
    as:'employeTask',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.employeTask.belongsTo(db.image,{
    foreignKey:'attachmentId',
    as:'attachment',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})


































// expense


db.business.hasMany(db.expense,{
    foreignKey:'businessId',
    as:'expense',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.expense.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.employe.hasMany(db.expense,{
    foreignKey:'employeId',
    as:'expense',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.expense.belongsTo(db.employe,{
    foreignKey:'employeId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})





db.image.hasMany(db.expense,{
    foreignKey:'attachmentId',
    as:'expense',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.expense.belongsTo(db.image,{
    foreignKey:'attachmentId',
    as:'attachment',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})
































// product


db.business.hasMany(db.product,{
    foreignKey:'businessId',
    as:'product',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.product.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.employe.hasMany(db.product,{
    foreignKey:'employeId',
    as:'product',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.product.belongsTo(db.employe,{
    foreignKey:'employeId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})





db.image.hasMany(db.product,{
    foreignKey:'imageId',
    as:'product',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.product.belongsTo(db.image,{
    foreignKey:'imageId',
    as:'image',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})



































// supplierPayment


db.business.hasMany(db.supplierPayment,{
    foreignKey:'businessId',
    as:'supplierPayment',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.supplierPayment.belongsTo(db.business,{
    foreignKey:'businessId',
    as:'business',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




db.employe.hasMany(db.supplierPayment,{
    foreignKey:'employeId',
    as:'supplierPayment',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.supplierPayment.belongsTo(db.employe,{
    foreignKey:'employeId',
    as:'employe',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})



















module.exports=db