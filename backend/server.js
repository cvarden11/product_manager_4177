import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import {connectDB} from './config/db.js'
import swaggerUiExpress from "swagger-ui-express";
import swaggerSpec from ".swagger/swagger.js"

import productRoutes from './routes/product.routes.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config()

const app= express();

allowedOrigins = [
    "https://productmanager4177.netlify.app",
    "https://product-manager-4177.onrender.com"

]

app.use(cors({
    origin:function(origin, callback){
        if(!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true)
        } else{
            return callback(new Error("Not allowed by CORS"))
        }   
    },
    methods:["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders:["Content-Type", "Authorization"],
    credential: true,
}));


app.use(express.json());
app.use(
    "/api-docs",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerSpec)
)



app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes)


app.get("/", (req, res)=>{
    res.send("welcome server is live");
})


app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log("server started at http://localhost:5400")
})