import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products").then((res) => res.json())
        .then((data) => { setApiData(data.products) }).catch((error)=>{console.log(error)})
    }, [])
    return (
        <div>
            <h1 align="center" className='my-5'>Fetch Products using Dummy JSON API</h1>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scopr="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {apiData.map((dt)=>(
    <tr key={dt.id}>
      <td>{dt.title}</td>
      <td>{dt.description}</td>
      <td>{dt.category}</td>
      <td>{dt.price}</td>
      <td>
        <a className='btn btn-warning'>Edit</a>
        <a className='btn btn-danger'>Delete</a>
      </td>
    </tr>
    ))}
    
 

  </tbody>
</table>
        </div>
    )
}

export default FetchAPI
