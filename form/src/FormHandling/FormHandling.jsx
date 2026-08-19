import React, { useState } from 'react'

const FormHandling = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Submit Successfully")
        console.log("Name: " + name)
        console.log("Email: " + email)
        console.log("Password: " + password)
    }
    return (
        <div className='container'>
            <div className="row mt-5">
                <h1 className='text-center mt-5'>Form Handling</h1>
                <div className="col-6 offset-3 mt-3">
                    <form>
                        <input type="text" placeholder='UserName...' className='form-control' onChange={(e) => { setName(e.target.value) }} /><br />
                        <input type="email" placeholder='UserEmail...' className='form-control' onChange={(e) => { setEmail(e.target.value) }} /><br />
                        <input type="password" placeholder='UserPassword...' className='form-control' onChange={(e) => { setPassword(e.target.value) }} /><br />
                        <button className='btn btn-info' onClick={handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormHandling
