import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

const app= express();
const PORT = 5400;
app.use(cors());
app.use(express.json());

let products = [];
let currentId = 1;

app.post("/api/products", (req, res)=>{
    const product = {id: currentId++, ...req.body};
    products.push(product)
    res.status(201).json(product);
})

app.get("/api/products", (req, res)=>{
    res.json(products);
})

app.get("/api/products/:id", (req, res)=>{
    const product = products.find(p=>p.id==req.params.id)
    if(product) res.json(product);
    else res.status(404).json({message:"product not found"})
    res.json(products);
})

app.get("/", (req, res)=>{
    res.send("welcome server is live");
})

app.put("/api/products/:id", (req, res)=>{
    const index= products.findIndex(p=> p.id == req.params.id)
    if(index!==-1){
        products[index]={...products[index], ...req.body} ;
        res.json(products[index])
    }else{
        res.status(404).json({message: "product not found"})
    }
})


app.delete("/api/products/:id", (req, res)=>{
    const index= products.findIndex(p=> p.id == req.params.id)
    if(index!==-1){
        const deleted = products.splice(index, 1)[0]
        res.json(deleted)
    }else{
        res.status(404).json({message: "product not found"})
    }
})


app.listen(PORT, ()=>{
    console.log("server started at http://localhost:5400")
})