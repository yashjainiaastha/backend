
const express = require("express")
const app = express()
const connectDB = require("./db/dbconnect");
const cors = require("cors")
const bodyparser = require("body-parser");
const uploadfile = require("./controller/fileController")
const RateLimiter = require('ratelimiter');


const categoryRoutes = require('./routes/CategoryRoute')
const taskRoutes = require("./routes/TaskRoute")
const userRoutes = require("./routes/userRoute");



app.use(cors())

app.use(express.json({ limit: '1mb' }));


app.use('/users',userRoutes);
app.use('/tasks',taskRoutes);
app.use('/category',categoryRoutes);
app.use('/upload', uploadfile)
connectDB()


app.post('/test', (req, res) => {
    console.log(req.body)
    res.send(req.body)
});

    app.get('/', (req, res) => {
        res.send('Hello shubham')
        console.log(req.userId)
    
    
    })

    app.listen(5000)
    console.log("Port Running on 5000")




