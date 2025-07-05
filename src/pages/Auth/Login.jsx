import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../../redux/actions/authActions"


const Login = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Please enter a valid email format").required("Email is required"),
        password: Yup.string().min(6, "minimum 6 characters").required("Password is required"),
    })
    return (<div className="login-container">
                <div className="login-card shadow p-4">

                    <h3 className="mb-4 text-center"> Login </h3>
                    <Formik initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values, {setSubmitting, resetForm})=>{
                        console.log(values)
                        const success = await dispatch(login(values));

                        if(success){
                            resetForm();
                            navigate("/product");
                        }

                        setSubmitting(false);
                    }}
                    >
                        {({isSubmitting})=>(
                            <Form>

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
                                <label className="form-label">Password</label>
                                <Field type="password" name="password" className="form-control"/>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-danger"
                                />
                                </div>


                            <button type="submit" className="btn btn-primary w-100 mt-3" disabled={isSubmitting}>
                                {isSubmitting ? "Logging in...": "Login"}
                            </button>
                            </Form>
                        )}
                    </Formik>
                        <div className="text-center" ><span>Don't have an account?</span>
                        <Link to="/register">Sign up</Link>
                        </div>
                </div>

    </div>)
}

export default Login