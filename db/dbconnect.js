const  mongoose  = require('mongoose');

const server = '127.0.0.1:27017'
const db = 'task_manager'


const connectDB= async() => {
    try {
        await mongoose.connect(`mongodb://${server}/${db}`)
        console.log("Data Base Connected")
    }catch(err){
        console.log("failed Connection " ,err)
    }
}

module.exports = connectDB