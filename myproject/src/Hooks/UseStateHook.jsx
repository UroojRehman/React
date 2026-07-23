import React, { useState } from 'react'

export const UseStateHook = () => {
    const [count, setCount] = useState(0)
    const [userName, setUserName] = useState("Guest User")
    const increment = () => {
        setCount(count + 1);
    }

    // task 2
    const handleOnChange =(e)=>{
       setUserName(e.target.value) 
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Task:01 - Counter</h1>
                    <div className="col-6 offset-3">
                        {/* <button className="btn btn-primary me-2" onClick={()=>{setCount(count-1)}}>-</button> */}
                        <button className="btn btn-primary me-2" onClick={() => { count > 0 ? setCount(count - 1) : setCount(0) }}>-</button>
                        <input type="text" value={count} />
                        <button className="btn btn-primary ms-2" onClick={increment}>+</button>

                    </div>
                </div>
                <div className="row mt-5">
                    <h1 className="text-center mt-5">Task:02 - OnChange Event</h1>

                    <div className="col-6 offset-3">
                        <input type="text" className="form-control" placeholder="Enter Your Name" onChange={handleOnChange}/>
                        <h2 className="text-center mt-3">Welcome {userName}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
