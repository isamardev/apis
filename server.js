const express = require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const requestIp = require('request-ip');
const bodyParser = require("body-parser");
const http = require('http');
// const socketIO = require('socket.io');
const chat = require('./socket/chatSocket.js');
const { Server } = require('socket.io');

const app=express()

// const server = require('http').createServer(app)
// const io = require('socket.io').Server()


// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(requestIp.mw());
app.use(bodyParser.json());



// const server = http.createServer(app);
// const io = socketIO(server);


// routers
const businessRouter = require('./routes/businessRoutes.js')
const imageRouter = require('./routes/imageRoutes.js')
const complaintAdminRouter = require('./routes/complaintAdminRoutes.js')
const complaintSoftwareRouter = require('./routes/complaintSoftwareRoutes.js')
const categoryRouter = require('./routes/categoryRoutes.js')
const customerRouter = require('./routes/customerRoutes.js')
const employeAttendRouter = require('./routes/employeAttendRoutes.js')
const employeLeaveRouter = require('./routes/employeLeaveRoutes.js')
const employeRouter = require('./routes/employeRoutes.js')
const employeSalaryRouter = require('./routes/employeSalaryRoutes.js')
const employeTaskRouter = require('./routes/employeTaskRoutes.js')
const expenseRouter = require('./routes/expenseRoutes.js')
const supplierPaymentRouter = require('./routes/supplierPaymentRoutes.js')
const loginRouter = require('./routes/loginRoutes.js')








app.use('/yumhubb/image',imageRouter)
app.use('/yumhubb/business',businessRouter)
app.use('/yumhubb/category',categoryRouter)
app.use('/yumhubb/customer',customerRouter)
app.use('/yumhubb/employe',employeRouter)
app.use('/yumhubb/complaintAdmin',complaintAdminRouter)
app.use('/yumhubb/complaintSoftware',complaintSoftwareRouter)
app.use('/yumhubb/employeAttend',employeAttendRouter)
app.use('/yumhubb/employeLeave',employeLeaveRouter)
app.use('/yumhubb/employeSalary',employeSalaryRouter)
app.use('/yumhubb/employeTask',employeTaskRouter)
app.use('/yumhubb/expense',expenseRouter)
app.use('/yumhubb/supplierPayment',supplierPaymentRouter)
app.use('/yumhubb/login',loginRouter)






app.use(express.static(__dirname + '/Images'))




// testing
app.get('/',(req,res)=>{
    res.json({ message:'Success'})
})


const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})

const server = require('http').createServer(app)
server.listen(8001)
console.log(server);

const io = new Server(server, {
    cors: {
        cors: true,
    }
})


// const io = new Server()


chat(io) 