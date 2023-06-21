const express = require("express")
const app = express()
const connectDB = require("./db/dbconnect");
const cors = require("cors")
const bodyparser = require("body-parser");


const categoryRoutes = require('./routes/CategoryRoute')
const taskRoutes = require("./routes/TaskRoute")
const userRoutes = require("./routes/userRoute");
const path = require('path')

app.use(cors())

app.use(express.json())
app.use(bodyparser.json())
app.use(express.json({ limit: '1mb' }));


app.use('/users',userRoutes);
app.use('/tasks',taskRoutes);
app.use('/category',categoryRoutes);

connectDB()
app.listen(8000)

