const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const adminRoutes = require('./routes/adminRoutes')
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

dotenv.config()
const app = express()
app.use(cors());
app.use(express.json())




//routes
app.use("/api/admin", adminRoutes);
app.use("/api/subscribe", subscriptionRoutes);
app.use("/api/service", serviceRoutes);


//DataBase setup
connectDB();
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("server running");
    
})
