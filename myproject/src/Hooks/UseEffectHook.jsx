import React, { useState } from 'react'
import { useEffect } from 'react'

export const UseEffectHook = () => {
  const [count, setCount] = useState(0)
   const increment = () => {
        setCount(count + 1);
    }
    // useEffect(()=>{
    //     // console.log("useEffect invokes....")
    // },[])

    useEffect(()=>{
        document.title = "Count: "+ count
    },[count])
  return (
  
    <div className='container'>
      <h1 className='text-center'>Use Effect</h1>
    <div className="row">
                    <h1 className="text-center">Task:01 - Counter</h1>
                    <div className="col-6 offset-3">
                        {/* <button className="btn btn-primary me-2" onClick={()=>{setCount(count-1)}}>-</button> */}
                        <button className="btn btn-primary me-2" onClick={() => { count > 0 ? setCount(count - 1) : setCount(0) }}>-</button>
                        <input type="text" value={count} />
                        <button className="btn btn-primary ms-2" onClick={increment}>+</button>

                    </div>
                </div></div>

  )
}
