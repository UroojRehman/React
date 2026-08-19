import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosAPI = () => {
    const [apiData, setApiData] = useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/users").then(response=>setApiData(response.data.users))
        .catch(error => console.log(error))
    },[])
  return (
    <div>
      <h1 className='text-center'>Fetch API using Axios</h1>
      <table className='table table-bordered'>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Action</th>
        </tr>
        {apiData.map((u)=>(
          <tr key={u.id}>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>
                <a className='btn btn-warning'>Edit</a>
                <a className='btn btn-danger'>Delete</a>
              </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default AxiosAPI
