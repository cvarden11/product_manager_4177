import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import {connectDB} from './config/db.js'
import productRoutes from './routes/product.routes.js'
dotenv.config()

const app= express();

app.use(cors());
app.use(express.json());



app.use("api/products", productRoutes)

app.get("/", (req, res)=>{
    res.send("welcome server is live");
})



app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log("server started at http://localhost:5400")
})