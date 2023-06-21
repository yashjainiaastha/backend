const  mongoose  = require('mongoose');

const connectDB= async() => {
    try {
        await mongoose.connect("mongodb+srv://yashj8682:yashjain@cluster0.du2h0ii.mongodb.net/?retryWrites=true&w=majority")
        console.log("Data Base Connected")
    }catch(err){
        console.log("failed Connection " ,err)
    }
}

module.exports = connectDB
