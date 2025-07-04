import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res)=>{
    try{
        const products= await Product.find({})
        res.status(200).json({
            success: true,
            message: "Products Fetched Successfully",
            data: products
        })
    }catch(error){
        console.error(error.message)
        res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}

export const getProductById = async (req, res)=>{

    const { id } = req.params

    try{
        const products= await Product.findById(id)
        res.status(200).json({
            success: true,
            message: "Product Fetched Successfully",
            data: product
        })
    }catch(error){
        console.error(error.message)
        res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}

export const createProducts= async (req, res)=>{

    const product = req.body

    if(!product.title||!product.image||!product.description||!product.price){
        return res.status(400).json(
            {
                success: false,
                message: "please provide all fields"
            }
        )
    }

    const newProduct = new Product (product)

    try{
        await newProduct.save()
        res.status(200).json({
            success: true,
            message: "Product Created Successfully",
            data: newProduct
        })
    }catch(error){
        console.error(error.message)
        res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}

export const updateProducts= async (req, res)=>{

    const { id } = req.params
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json(
            {
                success: false,
                message: "invalid id"
            }
        )
    }

    try{
        await Product.findByIdAndUpdate(id, product, {new:true})

        const allProducts = await Product.find({});

        res.status(200).json({
            success: true,
            message: "Product Updated Successfully",
            data: allProducts
        })
    }catch(error){
        console.error(error.message)
        res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}

export const deleteProduct = async (req,res)=>{
     const { id } = req.params

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Products Fetched Successfully",
        })
    }catch(error){
        console.error(error.message)
        res.status(404).json({
            success:false,
            message:"server error"
        })
    }
}