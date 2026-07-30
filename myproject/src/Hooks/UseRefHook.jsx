import React, { useRef, useState } from 'react'

export const UseRefHook = () => {
    const inputRef = useRef(null)
    const [output, setOutput] = useState()

    const display =()=>{
      setOutput(inputRef.current.value)
    }

    const clear = ()=>{
        setOutput("")
    }
    return (
        <div className='container'>
           <div className="row mt-5">
            <div className="col-6 offset-3">
            <input type="text" className='form-control' ref={inputRef} value={output} placeholder='Type anythimg you want...'/>
                <p><strong>{output? output: " "}</strong></p>
                <input className='btn btn-primary' type="submit" value="Display Value" onClick={display} />
                <input className='btn btn-danger' type="submit" value="Clear" onClick={clear} />
            </div>
           </div>
               
        </div>
    )
}
