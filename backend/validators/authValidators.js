import { body, validationResult } from "express-validator"

export const validateRegister = [
    body("name")
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .notEmpty()
    .withMessage("Name is required"),

    body("email").isEmail().withMessage("enter a valid email").normalizeEmail(),

    body("password")
    .isLength({min:6})
    .withMessage("Password must be at least 6 characters"),

    (req, res, next)=>{
        const errors = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                success:false,
                error:error.array().map((err)=>({
                    field: err.param,
                    message: err.msg
                }))
            })
        }
        next();

    }
]

export const validateLogin = [
    body("name")
    .isEmail()
    .withMessage("Enter a valid email").normalizeEmail(),

   
    body("password")
    .notEmpty()
    .withMessage("Password is required"),

    (req, res, next)=>{
        const errors = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                success:false,
                error:error.array().map((err)=>({
                    field: err.param,
                    message: err.msg
                }))
            })
        }
        next();

    }
]