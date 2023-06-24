const  mongoose  = require('mongoose');

const connectDB= async() => {
    try {
        await mongoose.connect("mongodb+srv://yashj8281:yashjain@clusterjwt.hzu7p1r.mongodb.net/")
        console.log("Data Base Connected")
    }catch(err){
        console.log("failed Connection " ,err)
    }
}

module.exports = connectDB
