import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import {connectDB} from './config/db.js'

import productRoutes from './routes/product.routes.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config()

const app= express();

const allowedOrigins = [
    "https://productmanager4177.netlify.app",
    "https://product-manager-4177.onrender.com"

]

const corsOptions = {
    origin:function(origin, callback){
        if(!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true)
        } else{
            console.log("origin:", origin);
            return callback(new Error("Not allowed by CORS"))
        }   
    },
    methods:["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders:["Content-Type", "Authorization"],
    credentials: true,
}


app.use(cors(corsOptions));
//app.options('*', cors(corsOptions));

app.use(express.json());


app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes)


app.get("/", (req, res)=>{
    res.send("welcome server is live");
})


app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log("server started at http://localhost:5400")
})