import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link} from "react-router-dom"


const SignUp = ()=>{

    const SignUpSchema = Yup.object().shape({
        fullname: Yup.string().required("Full name is required"),
        email: Yup.string().email("Please enter a valid email format").required("Email is required"),
        phone: Yup.string().matches(/^[0-9]{10,15}$/, "Phone number must be 10-15 numbers").required("Phone number is required"),
        password: Yup.string().min(6, "minimum 6 characters").required("Password is required"),
        confirmPassword:Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Please confirm your password")

    })
    return (<div className="signup-container">
                <div className="signup-card shadow p-4">

                    <h3 className="mb-4 text-center"> Sign Up </h3>
                    <Formik initialValues={{
                        fullname: "",
                        email: "",
                        phone: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={SignUpSchema}
                    onSubmit={(values, {resetForm})=>{
                        console.log(values)
                        resetForm();
                    }}
                    >
                        {({isSubmitting})=>(
                            <Form>
                                <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <Field type="text" name="fullname" className="form-control"/>
                                <ErrorMessage
                                    name="fullname"
                                    component="div"
                                    className="text-danger"
                                />
                                </div>

                                <div className="mb-3">
                                <label className="form-label">Email</label>
                                <Field type="email" name="email" className="form-control"/>
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-danger"
                                />
                                </div>

                                <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <Field type="text" name="phone" className="form-control"/>
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className="text-danger"
                                />
                                </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <Field type="password" name="password" className="form-control"/>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-danger"
                                />
                                </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <Field type="password" name="confirmPassword" className="form-control"/>
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="div"
                                    className="text-danger"
                                />
                                </div>


                            <button type="submit" className="btn btn-primary w-100 mt-3" disabled={isSubmitting}>
                                {isSubmitting ? "Signing up...": "Sign Up"}
                            </button>
                            </Form>
                        )}
                    </Formik>
                        <div className="text-center"><span>Already have an account?</span>
                        <Link to="/login">Login</Link>
                        </div>
                </div>

    </div>)
}

export default SignUp