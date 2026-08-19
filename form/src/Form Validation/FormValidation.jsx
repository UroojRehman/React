import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidation = () => {
    const form = useForm()
    const { register, handleSubmit, control, formState: { errors } } = form
    const SubmitData = () => {
        alert("Submit Successfully")
    }
    return (
        <div>
            <div className='container'>
                <div className="row mt-5">
                    <h1 className='text-center mt-5'>Form Validation using React-Hook-Form</h1>
                    <div className="col-6 offset-3 mt-3">
                        <form onSubmit={handleSubmit(SubmitData)}>
                            <input type="text" placeholder='UserName...' className='form-control' {...register("UserName", {
                                required: "Must Enter your UserName",
                                minLength: {
                                    value: 3,
                                    message: "UserName must contain atleast 3 letters"
                                }
                            })} />
                            <span style={{ "fontSize": "10px", "color": "red" }}>{errors.UserName?.message}</span>
                            <br /><br />
                            <input type="email" placeholder='UserEmail...' className='form-control' {...register("UserEmail", {
                                required: "Must Enter your Email",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid Email"
                                }
                            })} />
                            <span style={{ "fontSize": "10px", "color": "red" }}>{errors.UserEmail?.message}</span>
                            <br /><br/>
                            <input type="password" placeholder='UserPassword...' className='form-control' 
                            {...register("UserPassword", {required: "Must Enter your Password", minLength:{
                                value: 8,
                                message: "Your password must contain atleast 8 characters"
                            }})}/>
                             <span style={{ "fontSize": "10px", "color": "red" }}>{errors.UserPassword?.message}</span><br />
                            <button className='btn btn-info'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormValidation
