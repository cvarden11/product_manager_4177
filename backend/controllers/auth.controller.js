import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "supersecuresecretkey123!@"

export const register = async (req, res) => {
const {name, email, password } = req.body;

try{
    const userExists = await User.findOne({email});
    if (userExists) return res.status(400).json({message:"user already exists"});
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({name, email, password: hashedPassword, role:"customer"});
    
    const token = jwt.sign({id: user._id, role:user.role}, JWT_SECRET, {expiresIn: "1h"});

    res.status(201).json({user:{id:user._id, name: user.name, email: user.email}, token})
}catch(err){
    res.status(500).json({message: err.message});
}

}

export const login = async (req, res) => {
const {email, password } = req.body;

try{
    const user = await User.findOne({email});
    console.log("Password in DB:", user.password);
    console.log("Password from user:", password);
    if (!user) return res.status(404).json({message:"User not found"});
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({message:"Invalid Credentials"});
    const token = jwt.sign({id: user._id, role:user.role}, JWT_SECRET, {expiresIn: "1h"});

    res.status(200).json({user:{id:user._id, name: user.name, email: user.email}, token})
}catch(err){
    res.status(500).json({message: err.message});
}

}